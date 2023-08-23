-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 01 2021 г., 17:44
-- Версия сервера: 10.4.17-MariaDB
-- Версия PHP: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `toplamlar`
--

-- --------------------------------------------------------

--
-- Структура таблицы `adminstrator`
--

CREATE TABLE `adminstrator` (
  `id` int(11) NOT NULL,
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `adminstrator`
--

INSERT INTO `adminstrator` (`id`, `login`, `password`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Структура таблицы `internet`
--

CREATE TABLE `internet` (
  `id` int(11) NOT NULL,
  `company` varchar(255) NOT NULL,
  `traffic` int(11) NOT NULL,
  `price` double NOT NULL,
  `code` varchar(100) NOT NULL,
  `term` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `internet`
--

INSERT INTO `internet` (`id`, `company`, `traffic`, `price`, `code`, `term`) VALUES
(2, 'Uzmobile', 500, 1000, '*111*1*9*1%23', 30),
(3, 'Uzmobile', 1500, 15000, '*111*1*9*2%23', 30),
(4, 'Uzmobile', 3000, 24000, '*111*1*9*3%23', 30),
(5, 'Uzmobile', 5000, 32000, '*111*1*9*4%23', 30),
(6, 'Uzmobile', 8000, 41000, '*111*1*9*5%23', 30),
(7, 'Uzmobile', 12000, 50000, '*111*1*9*6%23', 30),
(8, 'Uzmobile', 20000, 65000, '*111*1*9*7%23', 30),
(9, 'Uzmobile', 30000, 75000, '*111*1*9*8%23', 30),
(10, 'Uzmobile', 50000, 85000, '*111*1*9*9%23', 30),
(11, 'Uzmobile', 75000, 11000, '*111*1*9*10%23', 30),
(12, 'Ucell', 500, 8900, '*555*2*1%23', 30),
(13, 'Ucell', 1000, 13000, '*555*3*2%23', 30),
(14, 'Ucell', 1500, 15000, '*555*3*3%23', 30),
(15, 'Ucell', 3000, 25000, '*555*3*4%23', 30),
(16, 'Ucell', 5000, 35000, '*555*3*5%23', 30),
(17, 'Beeline', 1000, 10000, '*1*1%23', 30),
(18, 'Beeline', 3000, 20000, '*1*2%23', 30),
(19, 'Beeline', 6000, 30000, '*1*3%23', 30),
(20, 'Beeline', 9000, 40000, '*1*4%23', 30),
(21, 'Mobiuz', 300, 8000, '*102*300%23', 30),
(22, 'Mobiuz', 500, 9000, '*102*500%23', 30),
(23, 'Mobiuz', 1000, 11000, '*102*1000%23', 30),
(24, 'Mobiuz', 2000, 17000, '*102*2000%23', 30);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `adminstrator`
--
ALTER TABLE `adminstrator`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `internet`
--
ALTER TABLE `internet`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `adminstrator`
--
ALTER TABLE `adminstrator`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `internet`
--
ALTER TABLE `internet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
