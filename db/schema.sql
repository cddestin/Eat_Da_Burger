CREATE DATABASE `burger_db`;

USE `burger_db`;

CREATE TABLE `burgers`
(
	`id` INTEGER (11) NOT NULL AUTO_INCREMENT,
	`burger_name` VARCHAR (75) NOT NULL,
	`devoured` BOOLEAN DEFAULT false,
	`date` DATETIME NOT NULL DEFAULT NOW(),
	PRIMARY KEY (`id`)
);



