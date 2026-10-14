(function (window) {
  const state = {
    selectedMM: [],
    selectedColors: [],
    selectedClarities: [],
    selectedColor: '',
    selectedClarity: '',
    currentOrder: null
  };

  function getRoundData() {
    let base = [
    {
        "id": "RM-1-VVS",
        "sieve": "-000",
        "mm_size": "0.8MM",
        "point_size": "0.2-25",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "210",
        "price_cvd": "205"
    },
    {
        "id": "RM-1-VS",
        "sieve": "-000",
        "mm_size": "0.8MM",
        "point_size": "0.2-25",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "200",
        "price_cvd": "195"
    },
    {
        "id": "RM-2-VVS",
        "sieve": "-000",
        "mm_size": "0.9MM",
        "point_size": "0.3-0.45",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "190",
        "price_cvd": "185"
    },
    {
        "id": "RM-2-VS",
        "sieve": "-000",
        "mm_size": "0.9MM",
        "point_size": "0.3-0.45",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "180",
        "price_cvd": "175"
    },
    {
        "id": "RM-3-VVS",
        "sieve": "00-0",
        "mm_size": "1.0MM",
        "point_size": "0.50",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "175",
        "price_cvd": "180"
    },
    {
        "id": "RM-3-VS",
        "sieve": "00-0",
        "mm_size": "1.0MM",
        "point_size": "0.50",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "170",
        "price_cvd": "175"
    },
    {
        "id": "RM-4-VVS",
        "sieve": "+0-1",
        "mm_size": "1.10MM",
        "point_size": "0.65",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "140",
        "price_cvd": "145"
    },
    {
        "id": "RM-4-VS",
        "sieve": "+0-1",
        "mm_size": "1.10MM",
        "point_size": "0.65",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "135",
        "price_cvd": "135"
    },
    {
        "id": "RM-5-VVS",
        "sieve": "+1-2",
        "mm_size": "1.20MM",
        "point_size": "0.75",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "120",
        "price_cvd": "125"
    },
    {
        "id": "RM-5-VS",
        "sieve": "+1-2",
        "mm_size": "1.20MM",
        "point_size": "0.75",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "115",
        "price_cvd": "115"
    },
    {
        "id": "RM-6-VVS",
        "sieve": "+2-3.5",
        "mm_size": "1.30MM",
        "point_size": "1.00",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "105",
        "price_cvd": "100"
    },
    {
        "id": "RM-6-VS",
        "sieve": "+2-3.5",
        "mm_size": "1.30MM",
        "point_size": "1.00",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "95",
        "price_cvd": "95"
    },
    {
        "id": "RM-7-VVS",
        "sieve": "+3.5-4.5",
        "mm_size": "1.40MM",
        "point_size": "1.25",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "90",
        "price_cvd": "95"
    },
    {
        "id": "RM-7-VS",
        "sieve": "+3.5-4.5",
        "mm_size": "1.40MM",
        "point_size": "1.25",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "85",
        "price_cvd": "90"
    },
    {
        "id": "RM-8-VVS",
        "sieve": "+4.5-5.5",
        "mm_size": "1.50MM",
        "point_size": "1.50",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "95",
        "price_cvd": "90"
    },
    {
        "id": "RM-8-VS",
        "sieve": "+4.5-5.5",
        "mm_size": "1.50MM",
        "point_size": "1.50",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "85",
        "price_cvd": "85"
    },
    {
        "id": "RM-9-VVS",
        "sieve": "+5.5-6",
        "mm_size": "1.60MM",
        "point_size": "1.75",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "90",
        "price_cvd": "80"
    },
    {
        "id": "RM-9-VS",
        "sieve": "+5.5-6",
        "mm_size": "1.60MM",
        "point_size": "1.75",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "80",
        "price_cvd": "75"
    },
    {
        "id": "RM-10-VVS",
        "sieve": "+6-6.5",
        "mm_size": "1.70MM",
        "point_size": "2.00",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "80",
        "price_cvd": "80"
    },
    {
        "id": "RM-10-VS",
        "sieve": "+6-6.5",
        "mm_size": "1.70MM",
        "point_size": "2.00",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "75",
        "price_cvd": "75"
    },
    {
        "id": "RM-11-VVS",
        "sieve": "+6.5-7",
        "mm_size": "1.80MM",
        "point_size": "2.50",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "80",
        "price_cvd": "80"
    },
    {
        "id": "RM-11-VS",
        "sieve": "+6.5-7",
        "mm_size": "1.80MM",
        "point_size": "2.50",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "70",
        "price_cvd": "75"
    },
    {
        "id": "RM-12-VVS",
        "sieve": "+7-7.5",
        "mm_size": "1.90MM",
        "point_size": "3.00",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "80",
        "price_cvd": "85"
    },
    {
        "id": "RM-12-VS",
        "sieve": "+7-7.5",
        "mm_size": "1.90MM",
        "point_size": "3.00",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "70",
        "price_cvd": "70"
    },
    {
        "id": "RM-13-VVS",
        "sieve": "+7.5-8",
        "mm_size": "2.00MM",
        "point_size": "3.50",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "85",
        "price_cvd": "85"
    },
    {
        "id": "RM-13-VS",
        "sieve": "+7.5-8",
        "mm_size": "2.00MM",
        "point_size": "3.50",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "70",
        "price_cvd": "70"
    },
    {
        "id": "RM-14-VVS",
        "sieve": "+8-8.5",
        "mm_size": "2.10MM",
        "point_size": "4.00",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "60",
        "price_cvd": "65"
    },
    {
        "id": "RM-14-VS",
        "sieve": "+8-8.5",
        "mm_size": "2.10MM",
        "point_size": "4.00",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "55",
        "price_cvd": "55"
    },
    {
        "id": "RM-15-VVS",
        "sieve": "+8.5-9",
        "mm_size": "2.20MM",
        "point_size": "4.50",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "60",
        "price_cvd": "60"
    },
    {
        "id": "RM-15-VS",
        "sieve": "+8.5-9",
        "mm_size": "2.20MM",
        "point_size": "4.50",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "50",
        "price_cvd": "55"
    },
    {
        "id": "RM-16-VVS",
        "sieve": "+9-9.5",
        "mm_size": "2.30MM",
        "point_size": "5.00",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "70",
        "price_cvd": "65"
    },
    {
        "id": "RM-16-VS",
        "sieve": "+9-9.5",
        "mm_size": "2.30MM",
        "point_size": "5.00",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "60",
        "price_cvd": "55"
    },
    {
        "id": "RM-17-VVS",
        "sieve": "+9.5-10",
        "mm_size": "2.40MM",
        "point_size": "5.50",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "60",
        "price_cvd": "60"
    },
    {
        "id": "RM-17-VS",
        "sieve": "+9.5-10",
        "mm_size": "2.40MM",
        "point_size": "5.50",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "50",
        "price_cvd": "55"
    },
    {
        "id": "RM-18-VVS",
        "sieve": "+10-10.5",
        "mm_size": "2.50MM",
        "point_size": "6.00",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "70",
        "price_cvd": "65"
    },
    {
        "id": "RM-18-VS",
        "sieve": "+10-10.5",
        "mm_size": "2.50MM",
        "point_size": "6.00",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "60",
        "price_cvd": "60"
    },
    {
        "id": "RM-19-VVS",
        "sieve": "+10.5-11",
        "mm_size": "2.60MM",
        "point_size": "7.00",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "57",
        "price_cvd": "65"
    },
    {
        "id": "RM-19-VS",
        "sieve": "+10.5-11",
        "mm_size": "2.60MM",
        "point_size": "7.00",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "39",
        "price_cvd": "55"
    },
    {
        "id": "RM-20-VVS",
        "sieve": "+11-11.5",
        "mm_size": "2.70MM",
        "point_size": "8.00",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "57",
        "price_cvd": "85"
    },
    {
        "id": "RM-20-VS",
        "sieve": "+11-11.5",
        "mm_size": "2.70MM",
        "point_size": "8.00",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "45",
        "price_cvd": "75"
    },
    {
        "id": "RM-21-VVS",
        "sieve": "+11.5-12",
        "mm_size": "2.80MM",
        "point_size": "9.00",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "57",
        "price_cvd": "85"
    },
    {
        "id": "RM-21-VS",
        "sieve": "+11.5-12",
        "mm_size": "2.80MM",
        "point_size": "9.00",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "48",
        "price_cvd": "75"
    },
    {
        "id": "RM-22-VVS",
        "sieve": "+12-12.5",
        "mm_size": "2.90MM",
        "point_size": "10.00",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "70",
        "price_cvd": "90"
    },
    {
        "id": "RM-22-VS",
        "sieve": "+12-12.5",
        "mm_size": "2.90MM",
        "point_size": "10.00",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "60",
        "price_cvd": "85"
    },
    {
        "id": "RM-23-VVS",
        "sieve": "+12.5-13",
        "mm_size": "3.00MM",
        "point_size": "11.00",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "70",
        "price_cvd": "90"
    },
    {
        "id": "RM-23-VS",
        "sieve": "+12.5-13",
        "mm_size": "3.00MM",
        "point_size": "11.00",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "60",
        "price_cvd": "85"
    },
    {
        "id": "RM-24-VVS",
        "sieve": "+13-13.5",
        "mm_size": "3.10MM",
        "point_size": "12.00",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "63",
        "price_cvd": "85"
    },
    {
        "id": "RM-24-VS",
        "sieve": "+13-13.5",
        "mm_size": "3.10MM",
        "point_size": "12.00",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "50",
        "price_cvd": "75"
    },
    {
        "id": "RM-25-VVS",
        "sieve": "+13.5-14",
        "mm_size": "3.20MM",
        "point_size": "13.00",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "63",
        "price_cvd": "85"
    },
    {
        "id": "RM-25-VS",
        "sieve": "+13.5-14",
        "mm_size": "3.20MM",
        "point_size": "13.00",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "50",
        "price_cvd": "75"
    },
    {
        "id": "RM-26-VVS",
        "sieve": "+14",
        "mm_size": "3.3-3.6MM",
        "point_size": "14-17",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "63",
        "price_cvd": "85"
    },
    {
        "id": "RM-26-VS",
        "sieve": "+14",
        "mm_size": "3.3-3.6MM",
        "point_size": "14-17",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "60",
        "price_cvd": "78"
    },
    {
        "id": "RM-27-VVS",
        "sieve": "",
        "mm_size": "3.7-3.8MM",
        "point_size": "20 PTS",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "70",
        "price_cvd": "90"
    },
    {
        "id": "RM-27-VS",
        "sieve": "",
        "mm_size": "3.7-3.8MM",
        "point_size": "20 PTS",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "68",
        "price_cvd": "80"
    },
    {
        "id": "RM-28-VVS",
        "sieve": "",
        "mm_size": "3.9-4.1MM",
        "point_size": "25 PTS",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "85",
        "price_cvd": "95"
    },
    {
        "id": "RM-28-VS",
        "sieve": "",
        "mm_size": "3.9-4.1MM",
        "point_size": "25 PTS",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "80",
        "price_cvd": "90"
    },
    {
        "id": "RM-29-VVS",
        "sieve": "",
        "mm_size": "4.2-4.4MM",
        "point_size": "30 PTS",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "80",
        "price_cvd": "95"
    },
    {
        "id": "RM-29-VS",
        "sieve": "",
        "mm_size": "4.2-4.4MM",
        "point_size": "30 PTS",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "70",
        "price_cvd": "85"
    },
    {
        "id": "RM-30-VVS",
        "sieve": "",
        "mm_size": "4.5-4.5MM",
        "point_size": "35 PTS",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "85",
        "price_cvd": "95"
    },
    {
        "id": "RM-30-VS",
        "sieve": "",
        "mm_size": "4.5-4.5MM",
        "point_size": "35 PTS",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "75",
        "price_cvd": "85"
    },
    {
        "id": "RM-31-VVS",
        "sieve": "",
        "mm_size": "4.6-4.6MM",
        "point_size": "40 PTS",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "80",
        "price_cvd": "95"
    },
    {
        "id": "RM-31-VS",
        "sieve": "",
        "mm_size": "4.6-4.6MM",
        "point_size": "40 PTS",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "70",
        "price_cvd": "85"
    },
    {
        "id": "RM-32-VVS",
        "sieve": "",
        "mm_size": "4.7-4.8MM",
        "point_size": "45 PTS",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "80",
        "price_cvd": "95"
    },
    {
        "id": "RM-32-VS",
        "sieve": "",
        "mm_size": "4.7-4.8MM",
        "point_size": "45 PTS",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "70",
        "price_cvd": "85"
    },
    {
        "id": "RM-33-VVS",
        "sieve": "",
        "mm_size": "4.9-5.2MM",
        "point_size": "50 PTS",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "85",
        "price_cvd": "100"
    },
    {
        "id": "RM-33-VS",
        "sieve": "",
        "mm_size": "4.9-5.2MM",
        "point_size": "50 PTS",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "80",
        "price_cvd": "90"
    },
    {
        "id": "RM-34-VVS",
        "sieve": "",
        "mm_size": "5.50MM",
        "point_size": "60 PTS",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "80",
        "price_cvd": "95"
    },
    {
        "id": "RM-34-VS",
        "sieve": "",
        "mm_size": "5.50MM",
        "point_size": "60 PTS",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "75",
        "price_cvd": "90"
    },
    {
        "id": "RM-35-VVS",
        "sieve": "",
        "mm_size": "5.75MM",
        "point_size": "75 PTS",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "85",
        "price_cvd": "95"
    },
    {
        "id": "RM-35-VS",
        "sieve": "",
        "mm_size": "5.75MM",
        "point_size": "75 PTS",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "80",
        "price_cvd": "90"
    },
    {
        "id": "RM-36-VVS",
        "sieve": "",
        "mm_size": "6.00MM",
        "point_size": "90 PTS",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VVS",
        "price_hpht": "85",
        "price_cvd": "100"
    },
    {
        "id": "RM-36-VS",
        "sieve": "",
        "mm_size": "6.00MM",
        "point_size": "90 PTS",
        "shape": "Round Melee",
        "color": "E-F",
        "clarity": "VS",
        "price_hpht": "75",
        "price_cvd": "90"
    }
];
    // Build lookup by mm_size to generate all selectable colors and clarities
    const vvsBySize = {};
    const vsBySize = {};
    base.forEach(item => {
      const key = item.mm_size;
      if (item.clarity === 'VVS') vvsBySize[key] = item;
      if (item.clarity === 'VS') vsBySize[key] = item;
    });

    const extraColors = [
      { code: 'F-G', discount: 0.05 },
      { code: 'G-H', discount: 0.10 },
      { code: 'H-I', discount: 0.15 },
      { code: 'I-J', discount: 0.20 }
    ];

    const extended = [...base];

    // Add E-F SI
    Object.keys(vsBySize).forEach((mm, idx) => {
      const vsItem = vsBySize[mm];
      const hpht = Math.max(50, Math.round(parseFloat(vsItem.price_hpht) * 0.90));
      const cvd = Math.max(50, Math.round(parseFloat(vsItem.price_cvd) * 0.90));
      extended.push({
        id: `RM-${idx + 1}-SI`,
        sieve: vsItem.sieve,
        mm_size: vsItem.mm_size,
        point_size: vsItem.point_size,
        shape: 'Round Melee',
        color: 'E-F',
        clarity: 'SI',
        price_hpht: String(hpht),
        price_cvd: String(cvd)
      });
    });

    // Add extra colors for all clarities (VVS, VS, SI)
    extraColors.forEach(colObj => {
      Object.keys(vvsBySize).forEach((mm, idx) => {
        const vvsItem = vvsBySize[mm];
        const vsItem = vsBySize[mm] || vvsItem;
        ['VVS', 'VS', 'SI'].forEach(clar => {
          let baseHpht = clar === 'VVS' ? parseFloat(vvsItem.price_hpht) : parseFloat(vsItem.price_hpht);
          let baseCvd = clar === 'VVS' ? parseFloat(vvsItem.price_cvd) : parseFloat(vsItem.price_cvd);
          if (clar === 'SI') {
            baseHpht = baseHpht * 0.90;
            baseCvd = baseCvd * 0.90;
          }
          const finalHpht = Math.max(45, Math.round(baseHpht * (1 - colObj.discount)));
          const finalCvd = Math.max(45, Math.round(baseCvd * (1 - colObj.discount)));
          extended.push({
            id: `RM-${idx + 1}-${colObj.code.replace('-', '')}-${clar}`,
            sieve: vvsItem.sieve,
            mm_size: vvsItem.mm_size,
            point_size: vvsItem.point_size,
            shape: 'Round Melee',
            color: colObj.code,
            clarity: clar,
            price_hpht: String(finalHpht),
            price_cvd: String(finalCvd)
          });
        });
      });
    });

    return extended;
  }

  function init() {
    bindUI();
    updateCartBadge();
  }

  function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    if (badge) {
      const cart = JSON.parse(localStorage.getItem('itd_cart') || '[]');
      const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }
  }

  function bindUI() {
    const mmSelect = document.getElementById('filter-mm');
    if (mmSelect) {
      mmSelect.addEventListener('change', function() {
        state.selectedMM = Array.from(this.selectedOptions).map(opt => opt.value);
      });
    }

    // Multi-select for Color
    const colorBtns = document.querySelectorAll('#filter-color-group button');
    colorBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const val = this.getAttribute('data-color');
        const idx = state.selectedColors.indexOf(val);
        if (idx > -1) {
          state.selectedColors.splice(idx, 1);
          this.classList.remove('bg-amber-500', 'text-slate-950', 'shadow');
          this.classList.add('text-slate-400');
        } else {
          state.selectedColors.push(val);
          this.classList.remove('text-slate-400');
          this.classList.add('bg-amber-500', 'text-slate-950', 'shadow');
        }
        state.selectedColor = state.selectedColors.join(', ');
      });
    });

    // Multi-select for Clarity
    const clarityBtns = document.querySelectorAll('#filter-clarity-group button');
    clarityBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const val = this.getAttribute('data-clarity');
        const idx = state.selectedClarities.indexOf(val);
        if (idx > -1) {
          state.selectedClarities.splice(idx, 1);
          this.classList.remove('bg-amber-500', 'text-slate-950', 'shadow');
          this.classList.add('text-slate-400');
        } else {
          state.selectedClarities.push(val);
          this.classList.remove('text-slate-400');
          this.classList.add('bg-amber-500', 'text-slate-950', 'shadow');
        }
        state.selectedClarity = state.selectedClarities.join(', ');
      });
    });

    const resetBtns = [document.getElementById('btn-reset-filters'), document.getElementById('btn-reset-filters-top')];
    resetBtns.forEach(btnReset => {
      if (btnReset) {
        btnReset.addEventListener('click', () => {
          state.selectedMM = [];
          state.selectedColors = [];
          state.selectedClarities = [];
          state.selectedColor = '';
          state.selectedClarity = '';
          if (mmSelect) mmSelect.selectedIndex = -1;
          
          colorBtns.forEach(b => {
            b.classList.remove('bg-amber-500', 'text-slate-950', 'shadow');
            b.classList.add('text-slate-400');
          });
          clarityBtns.forEach(b => {
            b.classList.remove('bg-amber-500', 'text-slate-950', 'shadow');
            b.classList.add('text-slate-400');
          });
          
          document.getElementById('results-container').classList.add('hidden');
        });
      }
    });

    const searchBtns = [document.getElementById('btn-search-melee'), document.getElementById('btn-search-melee-top')];
    searchBtns.forEach(btnSearch => {
      if (btnSearch) {
        btnSearch.addEventListener('click', renderMatrixTable);
      }
    });
  }

  function renderMatrixTable() {
    const tableBody = document.getElementById('rm-table-body');
    const countEl = document.getElementById('rm-items-count');
    const container = document.getElementById('results-container');
    if (!tableBody || !container) return;

    let items = getRoundData();

    // Default to classic E-F (VVS/VS) catalog if no specific color/clarity/size filters chosen
    if (state.selectedColors.length === 0 && state.selectedClarities.length === 0 && (!state.selectedMM || state.selectedMM.length === 0)) {
      items = items.filter(i => i.color === 'E-F' && (i.clarity === 'VVS' || i.clarity === 'VS'));
    }

    // 1. Filter by Color(s)
    if (state.selectedColors && state.selectedColors.length > 0) {
      items = items.filter(i => {
        const itemColor = (i.color || '').toUpperCase().trim();
        return state.selectedColors.some(sc => {
          const target = sc.toUpperCase().trim();
          return itemColor === target || itemColor.includes(target) || target.includes(itemColor);
        });
      });
    }

    // 2. Filter by Clarity(s)
    if (state.selectedClarities && state.selectedClarities.length > 0) {
      items = items.filter(i => {
        const itemClarity = (i.clarity || '').toUpperCase().trim();
        return state.selectedClarities.some(sc => {
          const target = sc.toUpperCase().trim();
          return itemClarity === target || itemClarity.includes(target) || target.includes(itemClarity);
        });
      });
    }

    // 3. Filter by MM Size
    if (state.selectedMM && state.selectedMM.length > 0) {
      items = items.filter(i => {
        const mmRaw = i.mm_size || '';
        const itemMM = parseFloat(mmRaw.replace(/[^0-9.]/g, '').split('-')[0]);
        if (isNaN(itemMM)) return false;
        return state.selectedMM.some(valStr => {
          if (valStr.includes(' - ')) {
             const parts = valStr.split(' - ');
             const min = parseFloat(parts[0]);
             const max = parseFloat(parts[1]);
             return itemMM >= (min - 0.01) && itemMM <= (max + 0.01);
          } else {
             const targetMM = parseFloat(valStr);
             if (!isNaN(targetMM)) {
                return Math.abs(itemMM - targetMM) < 0.05;
             }
             return mmRaw.toLowerCase().includes(valStr.toLowerCase());
          }
        });
      });
    }

    if (countEl) countEl.textContent = items.length + " items";
    container.classList.remove('hidden');

    if (items.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="10" class="p-8 text-center text-slate-500 font-semibold bg-slate-50">
            No round melee items match the selected specifications. Please try adjusting your color, clarity, or size filters.
          </td>
        </tr>
      `;
      return;
    }

    tableBody.innerHTML = items.map((item, idx) => {
      const color = item.color || 'E-F';
      const clarity = item.clarity || 'VS';
      const hphtPrice = item.price_hpht || '0';
      const cvdPrice = item.price_cvd || '0';
      const stockNo = 'HRD/' + clarity + '/' + (item.mm_size || 'N/A');
      const availabilityText = `<i class="fa-solid fa-circle-check text-emerald-500 mr-1"></i> In Stock <br><span class="text-[10px] text-emerald-600">(Ready to Ship)</span>`;

      return `
        <tr class="hover:bg-slate-50 transition border-b border-slate-100 last:border-0">
          <td class="p-3.5 text-slate-500">${idx + 1}</td>
          <td class="p-3.5"><span class="px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-[10px] font-bold text-slate-700">${stockNo}</span></td>
          <td class="p-3.5"><span class="px-3 py-1 bg-slate-900 rounded-full text-[10px] font-bold text-white">${item.shape || 'Round Melee'}</span></td>
          <td class="p-3.5 font-bold text-slate-800">${item.mm_size || 'N/A'}</td>
          <td class="p-3.5 text-slate-600 font-semibold">${color}</td>
          <td class="p-3.5 text-slate-600 font-semibold">${clarity}</td>
          <td class="p-3.5"><span class="font-mono text-amber-700 font-bold bg-amber-50 px-2 py-1 rounded">${item.point_size || '0.5-PT'}</span></td>
          <td class="p-3.5">
            <span class="font-bold text-slate-900 block">$${cvdPrice}/ct <span class="text-[10px] font-normal text-slate-500">(HPHT: $${hphtPrice}/ct)</span></span>
          </td>
          <td class="p-3.5 text-emerald-700 font-bold leading-tight">${availabilityText}</td>
          <td class="p-3.5 text-right">
            <button onclick="window.RoundMeleeEngine.openOrderModal('${item.id}', '${item.mm_size}', '${color}', '${clarity}', '${cvdPrice}', '${hphtPrice}')" class="px-4 py-2 bg-slate-900 text-white hover:bg-amber-500 hover:text-slate-950 font-bold rounded-lg text-[11px] transition shadow uppercase">
              Add to cart
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }

  function openOrderModal(id, mmSize, color, clarity, price, hphtPrice) {
    state.currentOrder = { id, mmSize, color, clarity, price, hphtPrice };
    
    let modal = document.getElementById('rm-cart-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'rm-cart-modal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto';
      document.body.appendChild(modal);
    }

    const stockNo = 'HRD/' + clarity + '/' + mmSize;
    const pricePerCarat = parseFloat(price) || 0;

    modal.innerHTML = `
      <div class="bg-white rounded-xl max-w-2xl w-full shadow-2xl overflow-hidden my-8 relative" style="display:flex;flex-direction:row;">
        <button onclick="document.getElementById('rm-cart-modal').remove()" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center text-sm transition z-10" style="font-size:18px;">
          &times;
        </button>
        
        <div style="width:45%;background:#111;display:flex;align-items:center;justify-content:center;overflow:hidden;min-height:350px;">
            <img src="../images/melee-hero.jpg" alt="Diamond" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none';this.parentElement.innerHTML='<i class=\'fa-regular fa-gem\' style=\'font-size:60px;color:#555;\'></i>'">
        </div>

        <div style="width:55%;padding:24px 28px;">
          <h3 style="font-size:20px;font-weight:800;color:#0f172a;margin:0 0 4px;">ROUND ${mmSize}</h3>
          <p style="font-size:14px;color:#475569;font-weight:600;margin:0 0 4px;">${color} ${clarity} -</p>
          <p style="font-size:12px;color:#475569;margin:0 0 10px;"><strong>STOCK NO:</strong>${stockNo}</p>
          
          <p style="font-size:14px;color:#059669;font-weight:700;margin:0;">Estimated Price/Carat $${pricePerCarat.toFixed(2)}</p>
          <p style="font-size:14px;color:#059669;font-weight:700;margin:0 0 12px;">Price/Piece $0.00</p>
          
          <div id="rm-success-msg" style="display:none;color:#059669;font-weight:700;font-size:13px;margin-bottom:10px;">
              <i class="fa-solid fa-circle-check" style="margin-right:4px;"></i> Product added to cart successfully
          </div>
          
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;margin-bottom:12px;">
              <input type="checkbox" style="width:16px;height:16px;">
              <span style="font-size:13px;color:#475569;">Match for size and color</span>
          </label>

          <div style="margin-bottom:14px;">
              <label style="display:block;font-size:13px;color:#0f172a;font-weight:700;margin-bottom:6px;">Special Instructions:</label>
              <textarea id="rm-modal-instructions" style="width:100%;border:1px solid #cbd5e1;border-radius:6px;padding:8px 10px;font-size:13px;resize:vertical;min-height:60px;outline:none;" placeholder=""></textarea>
          </div>

          <!-- Carats stepper -->
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
              <span style="font-size:13px;font-weight:700;color:#0f172a;min-width:56px;">CARATS:</span>
              <div style="display:flex;align-items:center;">
                  <button type="button" onclick="const q=document.getElementById('rm-modal-carats'); q.value=Math.max(0,(parseFloat(q.value)||0)-0.01).toFixed(2)" style="width:36px;height:36px;background:#f59e0b;color:white;border:none;font-size:18px;font-weight:bold;cursor:pointer;border-radius:4px 0 0 4px;">&#8722;</button>
                  <input type="number" id="rm-modal-carats" value="0.00" min="0" step="0.01" style="width:60px;text-align:center;height:36px;border:1px solid #e2e8f0;border-left:none;border-right:none;font-size:14px;font-weight:bold;outline:none;">
                  <button type="button" onclick="const q=document.getElementById('rm-modal-carats'); q.value=(parseFloat(q.value)||0+0.01).toFixed(2); q.value=(parseFloat(q.value)+0.01).toFixed(2)" style="width:36px;height:36px;background:#f59e0b;color:white;border:none;font-size:18px;font-weight:bold;cursor:pointer;border-radius:0 4px 4px 0;">&#43;</button>
              </div>
              <span style="font-size:11px;color:#64748b;">ct</span>
          </div>
          <!-- Pieces stepper -->
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
              <span style="font-size:13px;font-weight:700;color:#0f172a;min-width:56px;">PIECES:</span>
              <div style="display:flex;align-items:center;">
                  <button type="button" onclick="const q=document.getElementById('rm-modal-pieces'); if(parseInt(q.value)>0) q.value=parseInt(q.value)-1" style="width:36px;height:36px;background:#0f172a;color:white;border:none;font-size:18px;font-weight:bold;cursor:pointer;border-radius:4px 0 0 4px;">&#8722;</button>
                  <input type="number" id="rm-modal-pieces" value="1" min="0" style="width:60px;text-align:center;height:36px;border:1px solid #e2e8f0;border-left:none;border-right:none;font-size:14px;font-weight:bold;outline:none;">
                  <button type="button" onclick="const q=document.getElementById('rm-modal-pieces'); q.value=parseInt(q.value)+1" style="width:36px;height:36px;background:#0f172a;color:white;border:none;font-size:18px;font-weight:bold;cursor:pointer;border-radius:0 4px 4px 0;">&#43;</button>
              </div>
              <span style="font-size:11px;color:#64748b;">pcs</span>
          </div>

          <button type="button" onclick="window.RoundMeleeEngine.addToCart()" style="display:inline-flex;align-items:center;gap:6px;padding:10px 24px;background:#0f172a;color:white;border:none;font-weight:bold;font-size:13px;border-radius:6px;cursor:pointer;transition:background 0.2s;text-transform:uppercase;" onmouseover="this.style.background='#f59e0b';this.style.color='#0f172a'" onmouseout="this.style.background='#0f172a';this.style.color='white'">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              ADD TO CART
          </button>
        </div>
      </div>
    `;
  }

  function addToCart() {
      const carats = parseFloat(document.getElementById('rm-modal-carats').value) || 0;
      const pieces = parseInt(document.getElementById('rm-modal-pieces').value) || 0;
      const inst = document.getElementById('rm-modal-instructions').value;

      if (carats === 0 && pieces === 0) {
          alert('Please enter at least a Carats or Pieces quantity before adding to cart.');
          return;
      }

      let cart = JSON.parse(localStorage.getItem('itd_cart') || '[]');

      const newItem = {
          id: state.currentOrder.id,
          mmSize: state.currentOrder.mmSize,
          color: state.currentOrder.color,
          clarity: state.currentOrder.clarity,
          price: parseFloat(state.currentOrder.price) || 0,
          carats: carats,
          pieces: pieces,
          quantity: pieces || 1,
          instructions: inst,
          source: 'Round Melee',
          addedAt: new Date().getTime()
      };

      cart.push(newItem);
      localStorage.setItem('itd_cart', JSON.stringify(cart));

      // Show success message
      const successMsg = document.getElementById('rm-success-msg');
      if (successMsg) {
          successMsg.style.display = 'block';
      }

      // Update cart badge
      updateCartBadge();
  }

  window.RoundMeleeEngine = {
    init: init,
    openOrderModal: openOrderModal,
    addToCart: addToCart
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window);
