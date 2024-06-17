/*
  Warnings:

  - You are about to drop the `Rl_Comentar` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_card` to the `Tb_Comentarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Rl_Comentar` DROP FOREIGN KEY `Rl_Comentar_id_card_fkey`;

-- DropForeignKey
ALTER TABLE `Rl_Comentar` DROP FOREIGN KEY `Rl_Comentar_id_comentario_fkey`;

-- AlterTable
ALTER TABLE `Tb_Comentarios` ADD COLUMN `id_card` INTEGER NOT NULL;

-- DropTable
DROP TABLE `Rl_Comentar`;
