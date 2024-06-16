-- CreateTable
CREATE TABLE `TB_Card` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `tag` VARCHAR(191) NOT NULL,
    `id_update_Card` INTEGER NOT NULL,
    `id_comentar` INTEGER NOT NULL,
    `id_equipe` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tb_Comentarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(191) NOT NULL,
    `id_login` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rl_Comentar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_card` INTEGER NOT NULL,
    `id_comentario` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rl_update_Card` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_card` INTEGER NOT NULL,
    `id_login` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TB_Equipe` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `id_cargo` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rl_cargoXuser` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_cargo` INTEGER NOT NULL,
    `id_user` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `id_cargoXuser` INTEGER NOT NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cargo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TB_Card` ADD CONSTRAINT `TB_Card_id_equipe_fkey` FOREIGN KEY (`id_equipe`) REFERENCES `TB_Equipe`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rl_Comentar` ADD CONSTRAINT `Rl_Comentar_id_card_fkey` FOREIGN KEY (`id_card`) REFERENCES `TB_Card`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rl_Comentar` ADD CONSTRAINT `Rl_Comentar_id_comentario_fkey` FOREIGN KEY (`id_comentario`) REFERENCES `Tb_Comentarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rl_update_Card` ADD CONSTRAINT `Rl_update_Card_id_card_fkey` FOREIGN KEY (`id_card`) REFERENCES `TB_Card`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rl_cargoXuser` ADD CONSTRAINT `Rl_cargoXuser_id_cargo_fkey` FOREIGN KEY (`id_cargo`) REFERENCES `cargo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rl_cargoXuser` ADD CONSTRAINT `Rl_cargoXuser_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
