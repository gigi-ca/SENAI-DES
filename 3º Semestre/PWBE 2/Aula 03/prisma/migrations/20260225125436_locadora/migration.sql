-- CreateTable
CREATE TABLE `Carros` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `placa` VARCHAR(191) NOT NULL,
    `marca` VARCHAR(191) NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,
    `ano_veiculo` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Clientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_completo` VARCHAR(191) NOT NULL,
    `CPF` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `CNH` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
