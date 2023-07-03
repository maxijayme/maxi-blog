-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-07-2023 a las 16:27:27
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `maxi_blog`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entries`
--

CREATE TABLE `entries` (
  `id` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `image` varchar(150) NOT NULL,
  `entry_content` varchar(1500) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `entries`
--

INSERT INTO `entries` (`id`, `title`, `image`, `entry_content`, `date`) VALUES
(1, 'Descubre los beneficios de adoptar una dieta vegana', 'images/dieta-vegan-1688207114933.jpeg', 'Adoptar una dieta vegana no solo beneficia a los animales, sino que también puede tener un impacto positivo en tu salud. Los estudios han demostrado que una dieta basada en plantas puede reducir el riesgo de enfermedades cardíacas, diabetes tipo 2 y ciertos tipos de cáncer. Además, puede ayudarte a mantener un peso saludable y aumentar tus niveles de energía. ¡Atrévete a probarlo y experimenta los numerosos beneficios que el veganismo puede ofrecer!', '2023-07-01 10:25:14'),
(4, 'Los mejores sustitutos de origen vegetal para productos lácteos', 'images/sustitutos-lacteos-en-el-desarrollo-de-productos-alimenticios-1688207138468.jpeg', 'Si te preocupa el bienestar animal o buscas reducir tu consumo de lácteos, estás de suerte. Existen numerosas alternativas veganas deliciosas para reemplazar la leche, el queso y el yogur. Desde la leche de almendras hasta el queso vegano a base de nueces, hay opciones para satisfacer todos los gustos y necesidades dietéticas. Descubre estas alternativas y comienza a disfrutar de productos lácteos deliciosos y libres de crueldad animal.', '2023-07-01 10:25:38'),
(7, 'El impacto ambiental de la industria cárnica y la solución vegana', 'images/twbq5g0h-1688207158410.png', 'La producción de carne es una de las principales causas de deforestación, emisiones de gases de efecto invernadero y contaminación del agua. En esta entrada de blog, exploraremos el impacto ambiental de la industria cárnica y cómo una dieta vegana puede ayudar a reducir significativamente nuestra huella ecológica. Descubre cómo hacer una elección consciente puede marcar la diferencia para nuestro planeta.', '2023-07-01 10:25:58'),
(8, 'Consejos para una transición exitosa hacia una dieta vegana', 'images/dieta-vegana-que-es-y-beneficios-1-1688207222690.jpeg', ' Si estás considerando adoptar una dieta vegana, es importante hacerlo de manera gradual y con conocimiento. En esta entrada de blog, encontrarás consejos prácticos para facilitar tu transición hacia el veganismo. Desde la planificación de comidas hasta la educación sobre nutrientes esenciales, estos consejos te ayudarán a mantener una alimentación equilibrada y deliciosa mientras te adaptas a tu nueva forma de vida.', '2023-07-01 10:27:02'),
(9, 'Descubre los superalimentos veganos para potenciar tu salud', 'images/nyw6pmkk-1688207343667.png', 'Los superalimentos son alimentos que se destacan por su alto contenido de nutrientes y beneficios para la salud. En esta entrada de blog, te presentaremos una lista de superalimentos veganos que puedes incorporar fácilmente a tu dieta. Desde las bayas de goji hasta las semillas de chía, estos alimentos te proporcionarán una dosis extra de vitaminas, minerales y antioxidantes para mejorar tu bienestar general.', '2023-07-01 10:29:03'),
(10, 'Veganismo: una elección ética para los amantes de los animales', 'images/oe3ivljq-1688310282626.png', 'Muchas personas eligen adoptar una dieta vegana por amor y respeto hacia los animales. En esta entrada de blog, exploraremos cómo el veganismo promueve la protección animal y reduce el sufrimiento innecesario en la industria alimentaria. Conocerás las realidades de la cría intensiva de animales y cómo tu elección diaria de alimentos puede marcar la diferencia para millones de seres vivos.', '2023-07-02 15:04:42'),
(11, 'Recetas veganas fáciles y deliciosas para toda la familia', 'images/wegetarianizm-1-1688310382052.jpeg', 'Si buscas incorporar más opciones veganas en tu menú familiar, estás en el lugar correcto. En esta entrada de blog, encontrarás recetas veganas sabrosas y sencillas que harán las delicias de todos, sin importar si son veganos o no. Desde hamburguesas vegetales hasta postres sin lácteos, estas recetas demostrarán que la comida vegana puede ser colorida, nutritiva y llena de sabor.', '2023-07-02 15:06:22'),
(12, 'El veganismo y la reducción del hambre en el mundo', 'images/hambre-1-1688310455391.jpeg', 'El veganismo no solo tiene beneficios para los animales y el medio ambiente, sino que también puede contribuir a la lucha contra el hambre en el mundo. En esta entrada de blog, exploraremos cómo una dieta basada en plantas puede ser una solución sostenible y ética para garantizar la seguridad alimentaria global. Descubre cómo la elección de alimentos puede marcar la diferencia para aquellos que carecen de acceso a una nutrición adecuada.', '2023-07-02 15:07:35'),
(13, 'La importancia de los nutrientes clave en una dieta vegana', 'images/99682-1688310532746.jpeg', ' Al adoptar una dieta vegana, es esencial asegurarse de obtener todos los nutrientes necesarios para una salud óptima. En esta entrada de blog, exploraremos los nutrientes clave que debes considerar al seguir una alimentación vegana, como las proteínas, el hierro, el calcio y las vitaminas B12 y D. Aprenderás sobre las fuentes veganas de estos nutrientes y cómo equilibrar tu dieta para satisfacer tus necesidades nutricionales.', '2023-07-02 15:08:52'),
(14, 'Veganismo: más que una dieta, un estilo de vida sostenible', 'images/claves-estilo-de-vida-sostenible-1688310637156.jpeg', ' El veganismo va más allá de la alimentación y se extiende a todos los aspectos de nuestra vida diaria. En esta entrada de blog, exploraremos cómo el veganismo se conecta con la moda sostenible, el cuidado de la piel libre de crueldad, la cosmética vegana y otros aspectos del estilo de vida ético. Descubre cómo puedes alinear tus valores con tus elecciones cotidianas y hacer una diferencia positiva en el mundo a través del veganismo.', '2023-07-02 15:10:37');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `entries`
--
ALTER TABLE `entries`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `entries`
--
ALTER TABLE `entries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
