-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1:3307
-- Létrehozás ideje: 2026. Okt 20. 10:19
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `konyvtar_db`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `konyvek`
--

CREATE TABLE `konyvek` (
  `id` int(11) NOT NULL,
  `mufaj_id` int(11) DEFAULT NULL,
  `cim` varchar(150) DEFAULT NULL,
  `kiadasi_ev` int(4) DEFAULT NULL,
  `oldalszam` int(11) DEFAULT NULL,
  `kolcsonozheto` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `konyvek`
--

INSERT INTO `konyvek` (`id`, `mufaj_id`, `cim`, `kiadasi_ev`, `oldalszam`, `kolcsonozheto`) VALUES
(1, 1, 'dűne krónikái', 1965, 680, 1),
(2, 1, 'alapítvány és birodalom', 1952, 280, 1),
(3, 1, 'Neurománc cyber trilógia', 1984, 320, 0),
(4, 2, 'a középkor alkonya', 1919, 410, 1),
(5, 2, 'Róma tündöklése és bukása', 1998, 540, 1),
(6, 2, 'mohácsi Csata oknyomozása', 2010, 190, 0),
(7, 3, 'Tíz kicsi néger rejtélye', 1939, 220, 1),
(8, 3, 'A Da-Vinci kód', 2003, 590, 1),
(9, 3, 'A sátán kutyája klasszikus', 1902, 180, 0),
(10, 1, 'Csillagközi Invázió harcosai', 1959, 260, 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `mufajok`
--

CREATE TABLE `mufajok` (
  `id` int(11) DEFAULT NULL,
  `nev` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `mufajok`
--

INSERT INTO `mufajok` (`id`, `nev`) VALUES
(1, 'Sci-Fi'),
(2, 'történelem'),
(3, 'Krimi'),
(1, 'Sci-Fi'),
(2, 'történelem'),
(3, 'Krimi');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `konyvek`
--
ALTER TABLE `konyvek`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `konyvek`
--
ALTER TABLE `konyvek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
