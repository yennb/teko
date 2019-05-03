/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 100134
 Source Host           : localhost:3306
 Source Schema         : teko-test

 Target Server Type    : MySQL
 Target Server Version : 100134
 File Encoding         : 65001

 Date: 03/05/2019 16:39:43
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'Yên Nguyễn Thị Bình', 'yenntb5@topica.edu.vn', 'ya29.Glz-BvDleup2UNt7FYxEiQa2U8GkiMPPPUa5biADr2orRmmpH2-P86dK9N7FLIFXJio5BlFb4Q1LKQlypEBFNMzVOCevHpvNuZAa6-JcUMNWr-nCwG6uz9bAj7gnCg', 'offline');
INSERT INTO `users` VALUES (2, 'Bình Yên Nguyễn', 'kemmuadong106@gmail.com', 'ya29.Glz-BibKYeOQG8PHd3e1kb8RNE8Moi1ce0wRn3B76_xLrDyPB5ozstI1a8pRKFeb3s-5yAszED0hpKOtBL5B9I6IqPbiIDBENhUtyADZMNWhpHsSWYhC8GMmWKct-g', 'online');

SET FOREIGN_KEY_CHECKS = 1;
