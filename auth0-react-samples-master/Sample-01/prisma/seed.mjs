import { PrismaClient } from "../src/generated/prisma/client.js";
const prisma = new PrismaClient();

const users = [
  {
    auth0Id: "auth0|userA123",
    email: "a@example.com",
    name: "Alice Johnson",
    profilePicture:
      "https://s3-alpha-sig.figma.com/img/295e/3945/83cd6f5739dcbd92dd0b60a9813dcac3?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fKThoAfRRX7aeIOUuDtyKUFrjY~ZrUqNH329arwIogc6VbinZJ8NL1QNP0GbXb2m1fF7ub7QDlZ31GaT0TEbaYdr36epogWz9ghv87STGg66MgEiu86zUbnpPeIzg-mOjgdDNuEmCza9TdH-HnGR5He6DOaxy1t5j7JZGNtEwBPfFalvyhGlYjsNaaO2MbdR2SHOT4e9X0yd46gUNwVjNr~oHzsqYhyg7AsIyJgdskM4LJbw07SnxJIs0XsrHCnH8UyVKybxjI5rf9jM1wGvTUV7ZeKJLWu~FgewdX2PgdgZ87fMHMaCQFwYic~3wvIGwxb5O1igL1SwyJ0bZHFzng__",
    createdAt: new Date("2023-04-17T10:00:00Z"),
  },
  {
    auth0Id: "auth0|userB456",
    email: "b@example.com",
    name: "Ben Carter",
    profilePicture:
      "https://s3-alpha-sig.figma.com/img/28f3/29d8/d569fce0f8530405d75202c568cef0d4?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DiQZiFJFbzLy-uV7XTyHswvZOz-Lk4UZF7uf~NMquy9U3VSTASsR0cxQTl6jaVBN~cQCbU6mGfIHci6x4mnZn2TqSxKCVbo9a8l4R~Y8~nlLCWXwPsgjSshtACL1eKNunkIRjEojeOKFWLQ~4sqrFVb7IWNODV74W1fmyeQqhA4U9bcS14Bbp1jSNODQK5gc5nOHUT2K4oVdOxXAIAT~tT~b5SbDgGE~UQ4ZRPR-GpTcWwGkoUmOygiRX3ApDxyru7NHU8EMf1k0GRdrpZfFQmzP1VhRSkZCQJP6aKmPhjszgdobdWv2y6wiVsR4GXLQEREtbUDBoxAeuZ-Z6zlhOQ__",
    createdAt: new Date("2023-01-06T09:00:00Z"),
  },
  {
    auth0Id: "auth0|userC789",
    email: "c@example.com",
    name: "Chloe Ramirez",
    profilePicture:
      "https://s3-alpha-sig.figma.com/img/6e67/5606/e251d71c3423db0397a03934f2d1c3ee?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UDnDEA5QA9Zox6dAGIOFBMCkD~bAKJwa-wIdHsaNpjjJYhBKCCOGxSO~0PnRyJBkOdfJo9zF1g9UHxA9bKEi0I2Lp-cJLgrG8eBrEWhDfOAMBdPSk5MRA-eC7ekxqFLDEbhW8t2bESTnSOcaCFytLaPiyf6um7qMXuqPtP5EhD8teS9RlumR2XITHVlktNxyvTQ-VTogkQfyBFs68HjCORVwsholzWX3y3ZgVR~Hb4OIsQ3QKNuOuiihdKKG4pTXvp914ENWdR6hul256KaIF87tSu3nkrFPXhmFRhgEX38lVFaSmuV8oW2NDCY11dDrkkgDKqsNkppZVfVy3Q8S3w__",
    createdAt: new Date("2022-12-26T15:00:00Z"),
  },
  {
    auth0Id: "auth0|userD321",
    email: "d@example.com",
    name: "Daniel Okafor",
    profilePicture:
      "https://s3-alpha-sig.figma.com/img/21ed/2c2f/839fff5201e8d3cecd73dd593f1f8e91?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FZkaIIT6REOY3crHxZm9DppXH8ZIWRuItdRw9UHm8O8kQuO9sBebtSEfqQTzur83G4hA46z5DOnH2zGktE2Dp-FcS4BQ3MwczWVwyj66xQpQ5n0bKU5WFC3aw-PrPaxJvB-f~uMbayUzmTFDCNFGLur6efuc1Ed82S3HXEAaFL2BKG9MWSyYQRuk3Cg9jiLuhggoGeW1TlDJ3sbFdBo2JM786KK7cz9f4hm5ue8J4COukBekmM7aNkSgMkPlGwgleuA7RQauHwzWUC1gZAKwcFcQtJ2hTVnr7tzOIMvjdKxWaNqKYY3xjSjW87LMRRwZnva4oqgtDVPiFl4bjuWe5A__",
    createdAt: new Date("2022-11-10T11:00:00Z"),
  },
  {
    auth0Id: "auth0|userE654",
    email: "e@example.com",
    name: "Emma Liu",
    profilePicture:
      "https://s3-alpha-sig.figma.com/img/da64/f02c/97a514e9e8c98d647f06c12400f1f0bd?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QbwOxpgRZO~DUBrHpUTt2qvJ2Xfc4AXBie6l3Nlyf-88RcPOY~RrjygzoMg9240bac3XhSNWIypEVme~usGkzZH86MyW7dyDeuH23SXgSlKYeugekyw3t~yOuS2D5tCJjKKb6-x8pGtnIm-UsyLU8wyoQH0Dqa8ucMcw69xzi-IIjjvXyo2xsd64l1JcaMl28Swtf5Dqpo6An~CioAUwjoAeYW2cNrHiJGRHTTAyVm2AxpTFfgyET941Q42Mqep6JMNTeL1FR9F6TfGX54Qwp5KHYVGFkmrByA3AfrdOXT482lSWPNVFDF6rcDcVLBDbVZyzrQvTSKwShDJxKXUFfQ__",
    createdAt: new Date("2022-09-04T08:00:00Z"),
  },
  {
    auth0Id: "auth0|userF987",
    email: "f@example.com",
    name: "Farid Nouiri",
    profilePicture:
      "https://s3-alpha-sig.figma.com/img/1817/aaaa/example-url-for-user6.jpg", // Replace with the actual pfp for user F if needed
    createdAt: new Date("2022-08-15T14:30:00Z"),
  },
];

const deliverables = [
  {
    deliverableName: "Deliverables Sample",
    type: "docx",
    createdAt: new Date("April 17, 2023"),
    activitiesList: "Client Presentation",
    price: 432,
    shortTermNextSteps: "Schedule review meeting",
  },
  {
    deliverableName: "Accounting",
    type: "xlsx",
    createdAt: new Date("January 06, 2023"),
    activitiesList: "Data Analysis",
    price: 781,
    shortTermNextSteps: "Finalize changes",
  },
  {
    deliverableName: "Minutes of meeting",
    type: "docx",
    createdAt: new Date("December 26, 2022"),
    activitiesList: "Project Planning",
    price: 613,
    shortTermNextSteps: "Prepare next version",
  },
  {
    deliverableName: "Kick-off.pptx",
    type: "pptx",
    createdAt: new Date("November 10, 2022"),
    activitiesList: "Feature Deployment",
    price: 998,
    shortTermNextSteps: "Push to production",
  },
  {
    deliverableName: "Saled Deck.pptx",
    type: "pptx",
    createdAt: new Date("September 04, 2022"),
    activitiesList: "UI Review",
    price: 347,
    shortTermNextSteps: "Assign internal QA",
  },
  {
    deliverableName: "HR Report",
    type: "docx",
    createdAt: new Date("September 30, 2022"),
    activitiesList: "User Testing",
    price: 524,
    shortTermNextSteps: "Test in staging",
  },
];

async function main() {
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const createdUser = await prisma.user.create({
      data: {
        ...user,
      },
    });

    const deliverable = deliverables[i];
    await prisma.deliverable.create({
      data: {
        ...deliverable,
        userId: createdUser.id,
      },
    });
  }
}

main()
  .then(() => {
    console.log("Seeded successfully!");
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
