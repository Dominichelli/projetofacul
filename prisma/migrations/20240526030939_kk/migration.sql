/*
  Warnings:

  - Added the required column `id_resp` to the `TB_Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `TB_Card` ADD COLUMN `id_resp` INTEGER NOT NULL;
