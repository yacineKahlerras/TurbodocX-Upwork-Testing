/*
  Warnings:

  - Added the required column `type` to the `Deliverable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Deliverable" ADD COLUMN     "type" TEXT NOT NULL;
