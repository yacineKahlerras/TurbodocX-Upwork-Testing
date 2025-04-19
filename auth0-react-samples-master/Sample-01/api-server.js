const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const { auth } = require("express-oauth2-jwt-bearer");
const authConfig = require("./src/auth_config.json");
const { PrismaClient } = require("./src/generated/prisma");

const prisma = new PrismaClient();
const app = express();

const port = process.env.API_PORT || 3001;
const appPort = process.env.SERVER_PORT || 3000;
const appOrigin = authConfig.appOrigin || `http://localhost:${appPort}`;

if (
  !authConfig.domain ||
  !authConfig.audience ||
  authConfig.audience === "{API_IDENTIFIER}"
) {
  console.log(
    "Exiting: Please make sure that auth_config.json is in place and populated with valid domain and audience values"
  );

  process.exit();
}

app.use(morgan("dev"));
app.use(helmet());
app.use(cors({ origin: appOrigin }));

const checkJwt = auth({
  audience: process.env.AUTH0_API_IDENTIFIER,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ["RS256"],
});

app.get("/api/external", checkJwt, async (req, res) => {
  const { sub, email, name } = req.auth.payload;

  console.log("req.auth : ", req.auth);

  try {
    let user = await prisma.user.findUnique({
      where: { auth0Id: sub },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          auth0Id: sub,
          email: email || "unknown@email.com",
          name: name || "Anonymous",
        },
      });
    }

    res.send({
      msg: "User verified and synced with DB",
      user,
    });
  } catch (err) {
    console.error("User sync failed:", err);
    res.status(500).send({ error: "Failed to sync user" });
  }
});

app.listen(port, () => console.log(`API Server listening on port ${port}`));
