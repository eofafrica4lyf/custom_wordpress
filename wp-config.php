<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'mypatricia' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Gqw;0eUe57Z0%Mmi>P4gLTNAF!ZIpVDm)8XXB[4qhgqiQ%MO^Wl~)EO$@S`hw[Nr' );
define( 'SECURE_AUTH_KEY',  '9+l>6V8`j9BTWEM4n;s<HCpY{ vtqZL9&2x{E$qe~)uT>8_<+kC|b^{t:.~oP(C_' );
define( 'LOGGED_IN_KEY',    'kR&+6BP>GFKx59G[p:YW;v/jX{0Q6WX7(M{!iwTKRIJ5(%12l:LM#V2mB:t8rr9E' );
define( 'NONCE_KEY',        ']r!SDUjR9NwN`X)D{)m#jFA,&yY eRwjT`apV_M#L5=r8[p+Qk4xTF~GCJ{,)y0E' );
define( 'AUTH_SALT',        '(N:jR[Zye~}9.I$tkO5ta;:O2!1+jRovC-4Vr@SL,F7RYzwV~d8JA}x8jw-{FN86' );
define( 'SECURE_AUTH_SALT', '# Ki,kx8Rb@Wu)+FJ8*p#P@Z`<Q@kfvb>;mmp}M!e$ZMGcE8{_kH-9Jol^7I_%B>' );
define( 'LOGGED_IN_SALT',   '9nKQ5Lfk_W+9=,;6bCUVj?.Dl`6P+kYQM3 /^,zhA.=k?*YhjE>BH$REm pyi$b8' );
define( 'NONCE_SALT',       '0$1UKwJg ).W!j{#(9;VR>m.O*K)6)l9n`W]YAxm,Li6]}B:_q0gm5[7(M$MNp0%' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );

