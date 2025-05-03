/*
  Warnings:

  - You are about to drop the column `done` on the `todo` table. All the data in the column will be lost.
  - Added the required column `fill` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `todo` DROP COLUMN `done`,
    ADD COLUMN `fill` VARCHAR(191) NOT NULL;
