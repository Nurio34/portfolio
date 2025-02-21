import { motion } from "framer-motion";

const Three_Svg = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="60px" // Scaled down to 60px width
      height="auto" // Maintain aspect ratio
      viewBox="0 0 300 300"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,360.000000) scale(0.100000,-0.130000)"
        fill="#fff"
        stroke="none"
      >
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.1 },
          }}
          d="M1369 2583 c-9 -2 -25 -21 -35 -41 -18 -33 -25 -38 -69 -44 -41 -6
-56 -14 -82 -45 -18 -21 -33 -41 -33 -45 0 -4 -22 -19 -50 -34 -45 -24 -48
-28 -32 -40 13 -9 18 -10 21 -1 6 16 34 36 43 31 4 -3 5 -11 1 -20 -4 -12 1
-14 21 -11 15 1 26 6 26 10 0 4 6 20 15 36 14 27 13 29 -5 24 -11 -3 -17 -10
-13 -17 4 -8 2 -8 -7 1 -14 13 -5 33 15 33 7 0 25 14 39 30 23 27 29 30 66 24
27 -4 40 -3 40 5 0 6 10 11 23 10 21 0 21 -1 2 -9 -19 -8 -19 -9 3 -9 26 -1
29 11 6 29 -20 17 -14 64 9 68 22 4 35 -27 16 -39 -11 -6 -11 -10 -1 -19 6 -5
10 -7 7 -3 -3 3 9 15 26 25 16 10 28 22 25 27 -8 13 -58 28 -77 24z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.2 },
          }}
          d="M1459 2544 c-15 -31 -15 -33 5 -38 18 -5 19 -8 6 -16 -11 -7 1 -10
43 -10 35 0 57 4 57 11 0 7 -10 9 -25 5 -14 -4 -25 -3 -25 2 0 5 -12 14 -26
20 -14 7 -23 16 -20 21 8 13 118 1 134 -15 7 -8 18 -14 23 -14 5 0 21 -19 36
-42 20 -29 29 -37 31 -25 4 20 30 23 38 4 3 -8 27 -31 54 -51 28 -21 50 -46
50 -55 0 -12 -5 -10 -21 9 -22 27 -18 18 20 -42 12 -21 28 -38 33 -38 6 0 7
-7 4 -16 -3 -8 -2 -12 3 -9 14 8 19 -21 20 -100 1 -83 -11 -138 -33 -161 -9
-9 -20 -29 -23 -45 -3 -16 -9 -27 -13 -24 -4 2 -13 -8 -21 -23 -8 -15 -20 -33
-27 -40 -7 -8 -9 -18 -6 -24 4 -6 2 -8 -3 -5 -6 4 -16 0 -22 -7 -10 -12 -7
-14 13 -12 20 3 26 -1 26 -15 0 -11 6 -19 13 -19 9 0 9 -2 -1 -8 -18 -12 -6
-34 30 -55 23 -13 33 -15 39 -6 5 8 9 6 12 -7 4 -16 5 -17 6 -1 1 19 16 23 27
5 4 -6 -2 -19 -14 -28 -20 -17 -23 -53 -6 -69 4 -3 4 2 1 12 -6 17 2 22 33 17
20 -3 21 -5 14 -24 -3 -9 -12 -16 -20 -16 -8 0 -11 -6 -8 -15 6 -14 8 -13 19
1 13 18 45 13 45 -7 0 -6 -7 -9 -14 -6 -21 8 -30 -27 -14 -55 l12 -23 6 30 c6
32 13 27 24 -17 3 -16 13 -28 21 -28 18 0 20 -16 3 -23 -10 -4 -10 -6 0 -6 17
-1 15 -26 -4 -41 -8 -7 -14 -23 -13 -34 0 -12 1 -32 0 -46 -1 -21 -3 -22 -12
-10 -9 13 -10 13 -6 0 2 -8 12 -13 22 -12 16 3 17 1 6 -12 -8 -9 -9 -16 -3
-16 5 0 13 -12 16 -26 4 -14 12 -23 19 -21 7 2 10 11 8 18 -1 8 -5 40 -7 72
-2 32 -6 62 -9 67 -3 5 -1 11 5 15 17 10 11 65 -9 94 -11 15 -23 40 -26 57
-10 42 -32 89 -50 104 -8 7 -15 20 -15 30 0 9 -8 24 -19 34 -12 11 -17 27 -15
48 2 17 -3 60 -12 94 -15 63 -15 63 11 110 56 101 53 222 -11 342 -46 88 -95
137 -171 174 -35 16 -63 33 -63 36 0 15 -68 42 -125 50 l-60 8 -16 -32z m394
-658 c9 -7 17 -22 17 -32 0 -11 7 -29 15 -40 19 -28 6 -79 -21 -79 -27 0 -44
14 -44 37 0 10 -4 16 -10 13 -5 -3 -10 3 -10 15 0 11 7 23 15 26 8 4 12 10 9
16 -3 5 -12 4 -22 -4 -9 -7 -13 -8 -9 -2 3 6 11 23 16 38 12 29 18 31 44 12z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.3 },
          }}
          d="M1846 1824 c-9 -24 -7 -54 4 -54 6 0 10 16 10 35 0 38 -4 44 -14 19z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.4 },
          }}
          d="M1387 2419 c-18 -10 -38 -16 -62 -18 -5 -1 3 -8 19 -16 28 -15 53
-12 29 3 -7 5 -3 11 13 19 13 6 24 7 24 3 0 -5 -6 -10 -12 -13 -7 -2 -10 -8
-6 -12 4 -4 14 -3 21 3 10 9 17 8 25 0 9 -9 12 -9 12 1 0 13 -28 40 -40 40 -3
0 -13 -4 -23 -10z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.5 },
          }}
          d="M1667 2386 c-3 -8 5 -18 19 -25 13 -6 24 -19 23 -28 0 -15 -2 -15
-16 5 -19 27 -38 30 -21 2 7 -11 24 -24 38 -28 16 -6 30 -22 38 -46 14 -38 8
-62 -8 -36 -8 13 -12 12 -27 -4 -17 -18 -17 -19 0 -12 24 8 44 -3 26 -15 -11
-7 -11 -9 2 -9 10 0 20 11 23 26 6 21 9 24 21 14 12 -10 15 -10 15 2 0 18 -52
98 -60 93 -3 -2 -12 10 -19 26 -15 35 -46 55 -54 35z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.6 },
          }}
          d="M1546 2367 c-4 -15 0 -27 13 -38 10 -8 22 -25 25 -37 4 -12 12 -19
18 -16 7 4 6 9 -2 14 -7 4 -10 17 -8 28 4 13 1 19 -6 16 -6 -2 -17 0 -25 5
-12 8 -12 12 -2 24 7 9 8 18 3 21 -6 3 -12 -4 -16 -17z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.7 },
          }}
          d="M1250 2378 c0 -9 35 -43 46 -45 7 -1 10 6 7 17 -3 11 -9 20 -13 20
-5 0 -15 3 -24 6 -9 3 -16 4 -16 2z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.8 },
          }}
          d="M1216 2331 c-19 -20 -24 -31 -15 -31 23 1 51 27 47 45 -2 13 -9 10
-32 -14z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.9 },
          }}
          d="M1368 2349 c-23 -13 -25 -64 -2 -55 9 3 22 6 30 6 8 0 14 7 14 15 0
8 -4 15 -9 15 -5 0 -11 6 -13 14 -2 11 -8 12 -20 5z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.1 },
          }}
          d="M1470 2340 c0 -3 5 -11 10 -16 7 -7 1 -9 -20 -6 -16 2 -30 0 -30 -6
0 -10 59 -23 61 -13 7 30 4 48 -7 48 -8 0 -14 -3 -14 -7z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.11 },
          }}
          d="M1650 2321 c0 -6 -8 -8 -17 -5 -12 4 -9 -1 7 -15 14 -11 29 -21 33
-21 5 0 5 -4 2 -10 -3 -5 -2 -10 4 -10 20 0 21 19 1 33 -11 7 -17 16 -14 19 3
3 1 9 -5 13 -6 3 -11 2 -11 -4z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.12 },
          }}
          d="M1037 2299 c11 -11 9 -18 -20 -124 -8 -27 -12 -52 -8 -55 3 -3 7 -14
9 -25 2 -11 10 -27 18 -35 12 -13 14 -13 15 0 1 8 1 18 0 23 -1 9 11 9 27 -1
16 -11 6 -39 -16 -45 -12 -3 -11 -5 5 -6 14 -1 43 19 80 54 32 30 63 55 68 55
6 0 26 8 46 18 43 22 129 19 129 -5 0 -10 6 -13 16 -9 9 3 17 6 19 6 6 0 -29
64 -38 71 -15 11 -13 18 11 34 25 19 67 16 67 -3 0 -7 6 -17 14 -21 18 -11 5
-31 -19 -31 -23 0 -35 -16 -19 -26 6 -3 15 -1 19 6 6 9 9 9 15 0 10 -16 -16
-41 -44 -43 -14 -1 -20 -6 -16 -15 3 -7 0 -22 -5 -33 -14 -25 3 -25 27 0 10
11 30 22 46 26 33 9 43 23 28 38 -14 14 -14 37 -1 37 6 0 19 -9 30 -20 11 -11
20 -24 20 -30 0 -5 -9 -10 -20 -10 -28 0 -25 -13 6 -27 49 -23 92 30 47 56
-10 6 -14 11 -8 11 5 0 -1 7 -13 16 -12 8 -22 26 -22 39 0 37 -59 63 -61 28 0
-14 -2 -13 -9 5 -8 18 -17 22 -52 22 -60 0 -75 -11 -60 -45 18 -39 15 -45 -18
-35 -16 5 -30 6 -30 3 0 -3 -9 5 -19 18 -21 26 -25 25 -35 -8 -6 -18 -3 -23
11 -23 17 -1 17 -1 0 -14 -10 -8 -27 -12 -37 -9 -23 6 -23 4 -10 38 7 17 7 24
0 20 -6 -3 -10 -13 -10 -21 0 -8 -5 -14 -11 -14 -5 0 -8 -4 -4 -9 3 -5 -11
-15 -30 -21 -19 -6 -35 -15 -35 -19 0 -5 -9 -20 -21 -35 -19 -24 -22 -25 -49
-11 -20 10 -28 21 -26 39 0 13 4 22 8 20 14 -9 14 22 0 39 -14 16 -13 17 14
17 24 1 27 3 14 13 -8 7 -16 23 -18 37 -3 37 -10 50 -24 50 -8 0 -9 -3 -1 -11z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.13 },
          }}
          d="M1097 2303 c-22 -4 -27 -8 -22 -21 4 -9 10 -25 12 -34 3 -10 9 -15
14 -12 5 3 7 10 4 15 -4 5 -1 9 5 9 7 0 9 7 6 16 -3 8 -2 12 4 9 6 -4 17 1 26
9 17 18 14 18 -49 9z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.14 },
          }}
          d="M1625 2259 c-9 -13 13 -39 32 -39 10 0 13 -6 9 -15 -3 -9 1 -18 9
-21 8 -4 13 -10 10 -14 -3 -5 -1 -11 5 -15 5 -3 10 -18 10 -33 1 -23 2 -25 11
-9 5 9 7 22 3 29 -4 6 7 3 25 -8 17 -10 31 -22 31 -26 0 -4 5 -8 10 -8 19 0
-10 40 -43 60 -18 11 -32 25 -32 32 -1 7 -6 12 -13 11 -6 -2 -9 4 -6 12 4 8 1
15 -5 15 -6 0 -20 9 -31 20 -11 11 -22 15 -25 9z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.15 },
          }}
          d="M1144 2220 c-27 -11 -36 -24 -28 -43 8 -22 33 -10 27 14 -4 14 0 19
16 19 11 0 21 5 21 10 0 12 -7 12 -36 0z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.16 },
          }}
          d="M1580 2213 c0 -6 9 -18 20 -28 11 -10 20 -26 20 -36 0 -10 5 -21 11
-24 21 -13 21 5 0 38 -23 38 -51 65 -51 50z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.17 },
          }}
          d="M1780 2199 c-13 -9 -13 -10 0 -6 8 2 21 -2 28 -10 7 -7 18 -13 23
-13 16 0 10 19 -10 30 -24 12 -22 12 -41 -1z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.18 },
          }}
          d="M1718 2096 c-15 -20 -15 -26 -4 -36 12 -9 13 -7 9 9 -4 15 -1 21 11
21 9 0 16 -7 16 -16 0 -13 3 -14 15 -4 8 6 18 9 23 6 11 -7 8 -51 -4 -51 -12
-1 -54 -28 -54 -35 0 -3 16 -4 35 -2 23 3 35 9 35 20 0 9 10 26 22 39 12 13
18 26 14 30 -4 4 -11 2 -15 -5 -6 -10 -11 -10 -21 3 -7 8 -19 15 -27 15 -7 0
-16 7 -19 15 -8 20 -16 18 -36 -9z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.19 },
          }}
          d="M1599 2088 c-11 -21 -11 -22 4 -9 9 7 26 11 37 8 11 -3 20 -1 20 4 0
5 -4 9 -9 9 -5 0 -16 3 -24 6 -10 3 -20 -3 -28 -18z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.2 },
          }}
          d="M1500 2077 c0 -8 -11 -19 -25 -25 -32 -15 -38 -15 -30 -2 3 6 -4 10
-16 10 -22 0 -22 0 -4 -21 15 -16 27 -19 55 -14 27 5 40 1 56 -14 16 -14 24
-17 33 -8 18 18 13 -5 -6 -25 -16 -18 -16 -21 1 -53 16 -29 17 -38 6 -71 -16
-46 -39 -72 -62 -69 -12 2 -18 -3 -18 -16 0 -17 -16 -24 -42 -20 -5 0 -7 -4
-5 -11 1 -7 -11 -15 -28 -19 -30 -7 -30 -7 7 -8 48 -1 75 8 56 21 -8 5 0 7 22
3 30 -5 39 -2 67 27 39 40 75 119 67 145 -5 15 -4 16 5 3 10 -12 11 -11 9 8
-2 12 -7 22 -12 22 -5 -1 -12 4 -16 10 -10 16 -33 2 -26 -16 9 -23 -12 -26
-25 -3 -9 18 -8 24 4 31 9 4 18 22 22 38 4 17 11 27 17 24 5 -3 4 3 -3 15 -12
18 -15 19 -30 5 -22 -20 -76 -9 -59 12 7 7 18 10 26 7 8 -3 14 1 14 11 0 11
-9 16 -30 16 -18 0 -30 -5 -30 -13z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.21 },
          }}
          d="M1646 2056 c3 -8 -6 -27 -20 -43 -14 -15 -23 -29 -20 -33 3 -3 12 4
20 14 7 11 17 17 21 13 3 -4 -2 -17 -13 -29 -18 -20 -18 -21 -1 -15 10 4 21 7
23 7 2 0 4 23 4 50 0 28 -4 50 -10 50 -5 0 -7 -7 -4 -14z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.22 },
          }}
          d="M1707 1925 c-19 -40 -22 -69 -7 -60 6 4 8 10 6 14 -3 4 -1 13 5 21 6
11 9 6 9 -17 0 -30 -8 -38 -33 -34 -5 1 -6 -3 -2 -9 10 -17 26 -11 51 18 25
28 32 48 13 36 -8 -4 -9 0 -4 15 4 12 2 21 -4 21 -6 0 -8 7 -5 15 12 31 -13
14 -29 -20z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.23 },
          }}
          d="M1662 1825 c3 -3 0 -30 -7 -60 -8 -32 -9 -57 -4 -61 5 -3 9 0 9 7 0
8 4 8 15 -1 9 -8 15 -8 15 -2 0 6 -7 17 -15 26 -19 19 -19 25 1 47 17 19 13
49 -7 49 -7 0 -10 -2 -7 -5z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.24 },
          }}
          d="M1454 1798 c-3 -4 -16 -8 -28 -8 -31 0 -81 -26 -67 -34 6 -4 19 -2
30 4 11 5 26 8 33 5 7 -2 26 6 41 19 20 16 23 23 12 23 -9 0 -18 -4 -21 -9z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.25 },
          }}
          d="M1610 1774 c-13 -20 -41 -48 -62 -62 -40 -26 -47 -44 -9 -20 19 11
24 10 39 -9 15 -19 19 -20 35 -9 16 13 16 14 -4 19 -22 6 -23 44 -1 40 7 -2
12 6 12 16 0 11 5 21 11 23 6 2 10 11 8 21 -3 13 -10 8 -29 -19z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.26 },
          }}
          d="M1701 1773 c-18 -13 -17 -14 28 -30 l34 -12 -24 27 c-13 14 -17 21
-8 14 13 -10 19 -9 28 2 10 11 7 14 -15 12 -15 0 -34 -6 -43 -13z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.27 },
          }}
          d="M1295 1715 c-25 -21 -34 -34 -24 -35 16 0 76 56 68 64 -2 3 -22 -11
-44 -29z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.28 },
          }}
          d="M1353 1716 c-13 -13 -23 -27 -23 -31 0 -4 -8 -14 -17 -21 -17 -13
-17 -13 2 -14 11 0 27 5 35 10 8 5 11 10 7 10 -5 0 0 16 12 35 23 40 16 45
-16 11z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.29 },
          }}
          d="M1705 1700 c4 -6 1 -18 -6 -26 -10 -12 -8 -17 7 -29 10 -8 26 -12 35
-9 9 2 32 -7 53 -21 43 -29 43 -29 43 -10 0 8 -4 12 -9 9 -5 -3 -17 4 -28 15
-10 12 -24 20 -31 19 -8 -2 -21 12 -29 29 -8 18 -21 33 -28 33 -7 0 -10 -5 -7
-10z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.3 },
          }}
          d="M1463 1673 c-18 -7 -16 -23 1 -23 8 0 18 -4 21 -10 3 -6 -4 -9 -17
-9 -13 1 -31 -2 -40 -6 -12 -5 -20 -2 -24 8 -4 12 -10 12 -30 3 -36 -17 -29
-26 24 -28 26 0 54 -2 62 -2 25 -2 43 22 36 49 -6 25 -11 28 -33 18z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.31 },
          }}
          d="M1560 1650 c0 -11 -8 -24 -17 -27 -10 -4 -24 -13 -31 -20 -11 -11
-10 -13 6 -13 11 0 28 -3 37 -7 14 -5 16 -2 11 15 -4 11 -2 23 4 27 13 8 13
45 0 45 -5 0 -10 -9 -10 -20z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.32 },
          }}
          d="M1240 1630 c-12 -8 -11 -10 8 -10 13 0 22 -6 22 -15 0 -8 5 -15 10
-15 6 0 10 11 10 25 0 27 -22 33 -50 15z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.33 },
          }}
          d="M1670 1603 c0 -18 2 -33 4 -33 16 0 35 14 30 21 -3 5 -10 6 -16 3 -6
-4 -8 -3 -5 2 3 6 2 16 -4 24 -6 11 -9 6 -9 -17z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.34 },
          }}
          d="M1740 1611 c0 -6 5 -11 10 -11 10 0 22 -8 55 -38 8 -7 12 -19 9 -26
-10 -25 13 -26 34 -1 25 28 29 43 8 26 -10 -9 -16 -8 -26 4 -7 8 -19 15 -26
15 -8 0 -14 7 -14 15 0 8 -4 15 -9 15 -5 0 -16 3 -25 6 -9 3 -16 1 -16 -5z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.35 },
          }}
          d="M1200 1595 c0 -8 7 -15 16 -15 18 0 62 -42 79 -75 6 -11 19 -21 30
-23 20 -3 20 -3 0 9 -28 17 -28 16 -20 28 4 8 16 6 36 -4 16 -9 29 -11 29 -5
0 19 59 4 80 -21 23 -27 100 -69 136 -75 48 -7 96 -38 79 -51 -5 -5 -12 -15
-13 -23 -7 -29 -11 -45 -18 -68 -5 -18 -3 -21 10 -16 19 7 31 46 22 70 -4 12
-2 15 9 10 9 -3 15 0 15 9 0 7 9 15 20 17 20 3 20 4 -2 35 -20 27 -31 33 -78
38 -71 8 -92 17 -148 64 -26 21 -56 43 -67 49 -25 12 -93 13 -101 1 -6 -11
-24 -2 -24 12 0 6 16 9 34 8 19 -2 39 0 43 5 4 4 -15 6 -44 5 -38 -3 -54 0
-61 11 -13 21 -62 25 -62 5z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.36 },
          }}
          d="M1395 1571 c11 -5 24 -6 28 -4 4 3 14 -1 22 -7 8 -7 15 -9 15 -4 1 5
7 -2 15 -16 8 -14 14 -19 15 -12 0 7 5 10 10 7 6 -4 8 -10 6 -14 -3 -4 4 -12
14 -19 16 -10 18 -9 14 2 -4 11 0 13 14 9 16 -4 20 -1 18 14 -2 12 -11 18 -30
18 -16 -1 -25 4 -22 11 4 12 -59 25 -113 23 -23 0 -24 -1 -6 -8z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.37 },
          }}
          d="M1723 1565 c3 -6 -8 -17 -24 -24 -16 -7 -29 -16 -29 -21 0 -16 41
-22 58 -8 13 9 12 7 -2 -10 -22 -25 -11 -29 22 -6 12 8 22 24 22 35 0 13 4 18
12 13 7 -4 8 -3 4 4 -9 14 -38 3 -30 -12 3 -6 -4 0 -16 14 -12 14 -19 20 -17
15z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.38 },
          }}
          d="M1593 1500 c12 -32 22 -36 47 -20 13 8 12 10 -2 10 -10 0 -18 4 -18
10 0 5 -9 14 -19 20 -18 9 -18 8 -8 -20z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.39 },
          }}
          d="M1849 1511 c-9 -9 -18 -29 -21 -44 -5 -27 -5 -27 13 -11 11 9 19 25
19 36 0 10 7 18 15 18 8 0 15 4 15 8 0 14 -24 10 -41 -7z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.4 },
          }}
          d="M1875 1491 c3 -5 1 -12 -5 -16 -19 -11 -11 -56 10 -62 11 -3 20 -10
20 -15 0 -5 5 -6 12 -2 8 5 9 2 5 -10 -6 -14 -3 -15 13 -6 11 6 20 13 20 16 0
3 -4 3 -9 -1 -6 -3 -14 2 -19 10 -4 9 -18 17 -29 18 -18 1 -20 4 -11 20 5 10
7 21 4 24 -3 4 -1 12 5 20 9 10 8 13 -5 13 -10 0 -15 -4 -11 -9z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.41 },
          }}
          d="M1615 1459 c-28 -8 -27 -8 8 -4 22 2 35 0 32 -6 -4 -5 1 -9 11 -9 13
0 14 3 4 15 -7 8 -15 14 -19 14 -3 -1 -19 -5 -36 -10z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.42 },
          }}
          d="M1743 1454 c-10 -9 -12 -12 -5 -9 8 4 19 -1 27 -11 11 -15 16 -17 26
-6 10 10 10 12 0 12 -7 0 -10 4 -7 9 10 16 -22 20 -41 5z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.43 },
          }}
          d="M1813 1406 c4 -9 2 -25 -5 -35 -14 -23 -3 -71 17 -71 9 0 12 -6 9
-15 -4 -8 -10 -12 -16 -9 -5 3 -4 -3 3 -14 12 -19 49 -20 49 0 0 6 -7 8 -15 4
-18 -7 -20 5 -3 22 9 9 9 12 0 12 -19 0 -14 18 8 25 19 6 19 8 5 36 -9 16 -13
34 -10 39 3 5 1 11 -5 15 -6 4 -10 -7 -11 -27 -1 -18 -4 -44 -8 -58 l-7 -25
-7 25 c-3 14 -2 27 3 28 14 5 12 49 -2 58 -8 5 -9 2 -5 -10z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.44 },
          }}
          d="M1890 1352 c0 -13 4 -20 10 -17 14 9 12 -8 -2 -24 -10 -11 -10 -13 0
-7 15 9 16 -6 2 -20 -6 -6 -8 -18 -4 -27 5 -13 10 -14 25 -6 20 10 26 39 9 39
-5 0 -10 8 -10 18 0 14 2 15 10 2 5 -8 10 -10 9 -5 0 6 -11 24 -24 40 -24 29
-25 29 -25 7z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.45 },
          }}
          d="M1684 1248 c1 -20 -3 -23 -29 -20 -28 2 -29 1 -11 -13 16 -12 20 -29
22 -92 1 -43 -1 -82 -4 -88 -4 -5 -7 -17 -7 -25 0 -8 -10 -16 -23 -18 -13 -2
-26 -10 -28 -17 -3 -7 -16 -12 -29 -10 -13 1 -24 -1 -23 -4 3 -27 -4 -32 -33
-26 l-31 7 21 -21 c24 -24 51 -28 51 -6 0 18 1 18 34 6 22 -9 24 -8 21 10 -4
17 -2 19 11 9 12 -10 18 -9 35 6 25 23 51 69 42 77 -3 4 2 23 12 43 13 28 14
38 5 44 -8 5 -9 14 -3 26 11 22 11 34 0 52 -5 7 -7 27 -5 45 2 23 -1 33 -13
35 -11 2 -15 -4 -15 -20z m26 -93 c0 -14 -5 -25 -10 -25 -6 0 -8 -12 -5 -27
l6 -28 -16 27 c-9 17 -13 38 -9 53 8 33 34 33 34 0z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.46 },
          }}
          d="M1753 1220 c-4 -16 -8 -18 -19 -9 -11 9 -14 8 -14 -4 0 -8 6 -17 13
-20 7 -2 14 -20 15 -38 1 -18 5 -35 9 -38 3 -4 4 9 1 27 -2 17 -2 32 1 32 3 0
7 16 8 35 3 38 -6 47 -14 15z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.47 },
          }}
          d="M1800 1227 c0 -4 8 -20 17 -34 17 -26 17 -27 -1 -20 -14 5 -17 4 -13
-8 4 -8 2 -17 -2 -19 -4 -3 -8 -18 -7 -33 1 -17 -7 -35 -19 -45 -11 -9 -16
-20 -11 -25 5 -4 11 -2 13 5 3 6 11 12 19 12 9 0 14 11 14 32 0 30 1 31 15 12
14 -18 14 -18 8 4 -3 12 -12 22 -21 22 -13 0 -13 3 -4 12 10 10 17 10 32 0 18
-11 22 -9 32 13 6 14 15 25 20 25 4 0 8 7 8 15 0 8 -5 15 -11 15 -5 0 -7 5 -3
12 4 7 3 8 -4 4 -7 -4 -12 -16 -12 -27 0 -10 -4 -19 -9 -19 -5 0 -7 -10 -4
-22 4 -22 3 -22 -11 2 -18 29 -20 44 -6 35 6 -3 10 2 10 13 0 10 -7 19 -15 19
-8 0 -15 -5 -15 -11 0 -6 -5 -4 -10 4 -5 8 -10 11 -10 7z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.48 },
          }}
          d="M1999 1188 c0 -13 -3 -17 -6 -10 -8 19 -23 14 -23 -8 0 -11 -9 -25
-20 -32 -20 -13 -28 -38 -11 -38 4 0 17 11 27 25 36 47 40 34 18 -60 -7 -32
-52 -87 -64 -80 -4 3 -13 -2 -20 -10 -9 -10 -9 -15 -1 -15 6 0 11 -4 11 -9 0
-6 -9 -9 -19 -8 -11 0 -17 5 -15 9 14 22 -21 4 -54 -28 -24 -24 -30 -34 -17
-29 40 14 66 12 88 -5 26 -22 20 -31 -22 -32 -17 -1 -31 -5 -31 -9 0 -5 -17
-20 -38 -34 -29 -19 -46 -24 -69 -19 -23 4 -32 2 -36 -11 -4 -9 -11 -14 -16
-11 -5 3 -11 -2 -13 -12 -6 -21 10 -22 55 -3 16 6 37 11 47 11 10 0 32 11 48
25 17 14 34 25 39 25 16 0 77 50 90 73 15 28 16 57 2 57 -6 0 -8 -7 -5 -16 11
-27 -11 -45 -40 -32 -29 13 -31 28 -5 28 10 0 21 7 25 15 3 8 11 15 17 15 28
0 77 98 83 166 2 25 6 48 10 51 7 7 -12 33 -25 33 -5 0 -9 -10 -10 -22z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.49 },
          }}
          d="M1849 1093 c-1 -5 -3 -17 -4 -28 -1 -11 -5 -31 -10 -44 -11 -36 14
-16 31 25 18 44 18 63 -1 38 -13 -16 -14 -16 -9 -1 3 9 3 17 0 17 -3 0 -7 -3
-7 -7z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.5 },
          }}
          d="M880 1050 c-11 -11 -20 -25 -20 -32 0 -6 9 -2 20 10 20 21 59 29 73
15 4 -3 -1 -11 -9 -18 -14 -10 -10 -12 24 -13 23 -1 44 3 47 8 4 7 17 3 33 -8
27 -18 72 -19 72 -1 0 5 5 9 11 9 6 0 9 -7 5 -15 -4 -12 3 -15 32 -16 20 0 66
-2 102 -5 49 -3 61 -2 47 6 -9 6 -22 8 -27 5 -5 -3 -7 0 -4 8 7 19 -102 39
-204 38 -44 -1 -87 5 -108 14 -49 20 -70 19 -94 -5z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.51 },
          }}
          d="M900 1010 c0 -5 -8 -10 -17 -10 -11 -1 -1 -11 25 -26 30 -19 42 -33
42 -49 0 -13 5 -27 10 -30 6 -3 10 -16 10 -29 0 -36 65 -102 134 -136 58 -29
69 -31 172 -31 60 0 155 5 211 10 56 5 120 7 141 4 24 -3 42 -1 46 6 5 7 -1
11 -14 11 -11 0 -39 9 -60 19 -24 11 -38 14 -37 7 1 -6 -8 -10 -23 -8 -14 2
-63 2 -110 0 -177 -6 -257 0 -310 23 -52 22 -100 68 -100 96 0 8 -6 13 -13 10
-8 -3 -18 7 -24 24 -8 21 -8 27 0 22 7 -4 8 0 4 11 -4 10 -7 25 -7 33 0 11 -8
14 -30 11 -17 -3 -33 -1 -36 4 -3 4 -1 8 5 8 6 0 8 7 5 15 -7 17 -24 20 -24 5z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.52 },
          }}
          d="M1737 1004 c-4 -4 -7 -16 -7 -26 0 -16 3 -16 20 -6 20 13 22 29 4 35
-6 2 -13 0 -17 -3z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.53 },
          }}
          d="M1078 961 c-2 -9 3 -22 12 -29 13 -11 13 -12 0 -7 -11 4 -16 -1 -17
-15 -2 -18 0 -19 13 -5 9 8 18 15 22 15 4 0 7 11 7 24 0 29 -32 43 -37 17z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.54 },
          }}
          d="M1332 971 c-14 -10 -22 -40 -12 -46 6 -4 10 -1 10 4 0 6 4 11 10 11
5 0 7 -6 4 -13 -5 -14 78 -43 95 -32 6 3 11 1 11 -4 0 -6 11 -11 25 -11 14 0
25 3 25 8 0 13 -17 33 -26 31 -18 -4 -64 21 -64 35 0 14 -62 27 -78 17z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.55 },
          }}
          d="M1455 969 c-16 -4 -23 -8 -15 -9 43 -5 70 -5 70 1 0 4 8 10 18 12 26
7 -39 4 -73 -4z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.56 },
          }}
          d="M1705 952 c-10 -10 -5 -22 10 -22 8 0 15 -5 15 -11 0 -8 5 -8 15 1 8
7 15 16 15 20 0 9 -47 19 -55 12z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.57 },
          }}
          d="M1196 925 c-8 -9 -12 -23 -9 -31 4 -10 9 -12 16 -5 5 5 17 7 26 4 14
-4 13 -3 -1 7 -9 6 -15 17 -12 25 8 19 -1 19 -20 0z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.58 },
          }}
          d="M1670 922 c0 -4 -10 -12 -22 -17 -23 -11 -37 -35 -20 -35 6 0 17 7
26 15 8 9 19 15 23 15 4 -1 9 6 11 14 2 9 -1 16 -7 16 -6 0 -11 -3 -11 -8z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.59 },
          }}
          d="M1120 890 c-14 -3 -25 -10 -25 -15 0 -6 -3 -15 -7 -20 -8 -12 -1 -24
25 -44 15 -12 17 -11 17 3 0 10 -4 15 -9 11 -5 -3 -8 6 -7 20 3 26 16 48 16
26 0 -7 4 -10 9 -7 5 4 7 -4 3 -16 -4 -17 -2 -20 11 -15 9 3 21 -1 29 -10 12
-15 10 -16 -14 -10 -22 6 -26 4 -21 -8 3 -9 8 -14 11 -11 2 3 12 1 22 -4 12
-6 29 -3 56 10 35 19 36 20 12 20 -15 0 -30 -4 -33 -10 -3 -5 -11 -10 -16 -10
-6 0 -8 4 -5 9 3 5 -1 15 -10 22 -8 7 -21 25 -27 39 -10 22 -17 25 -37 20z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.6 },
          }}
          d="M1254 885 c-4 -8 -12 -15 -19 -15 -7 0 -16 -7 -19 -16 -10 -26 -7
-29 9 -8 8 10 15 14 15 9 0 -13 40 -17 40 -4 0 5 -5 9 -12 9 -9 0 -9 3 0 12 7
7 12 16 12 20 0 14 -20 9 -26 -7z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.61 },
          }}
          d="M1304 886 c-8 -9 -7 -15 3 -25 12 -11 18 -10 34 8 21 22 12 30 -10 9
-10 -9 -12 -9 -7 -1 9 16 -7 24 -20 9z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.62 },
          }}
          d="M1731 853 c-28 -19 -30 -23 -14 -23 12 0 23 7 27 15 3 8 10 15 17 15
6 0 8 -7 5 -16 -5 -14 -4 -15 9 -4 16 13 21 35 6 26 -5 -4 -11 -2 -13 2 -1 5
-18 -2 -37 -15z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.63 },
          }}
          d="M1392 854 c-13 -9 -19 -21 -15 -30 5 -15 7 -15 15 0 5 9 15 16 23 16
20 0 28 17 11 23 -7 3 -23 -1 -34 -9z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.64 },
          }}
          d="M1656 815 c-8 -9 -18 -15 -21 -15 -3 1 -11 -1 -18 -3 -6 -3 -3 -6 8
-7 18 -1 17 -2 -5 -15 -24 -13 -24 -14 -2 -12 12 1 22 4 22 8 0 16 40 50 51
43 8 -4 9 -3 5 4 -10 16 -22 15 -40 -3z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.65 },
          }}
          d="M1305 811 c-3 -6 -11 -9 -16 -6 -5 4 -9 1 -9 -4 0 -6 -9 -11 -20 -11
-11 0 -20 -4 -20 -10 0 -5 17 -10 37 -10 20 0 33 3 30 7 -4 3 -2 12 5 20 6 7
8 16 5 19 -3 3 -8 0 -12 -5z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.66 },
          }}
          d="M1460 814 c0 -13 31 -35 43 -31 9 4 8 6 -2 6 -11 1 -11 4 -1 16 11
13 8 15 -14 15 -14 0 -26 -3 -26 -6z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.68 },
          }}
          d="M2263 113 c-7 -2 -13 -14 -12 -26 0 -22 0 -22 9 1 10 24 25 29 36 10
4 -6 -1 -17 -11 -25 -11 -7 -14 -13 -8 -13 6 0 16 7 23 15 10 12 10 18 0 30
-13 16 -17 17 -37 8z"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.1, delay: 2.752 + 0.69 },
          }}
          d="M2422 93 c2 -10 10 -18 18 -18 8 0 16 8 18 18 2 12 -3 17 -18 17 -15
0 -20 -5 -18 -17z"
        />{" "}
      </g>
    </svg>
  );
};

export default Three_Svg;
