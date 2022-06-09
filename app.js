  //  I -> 1, V -> 5, X -> 10, L -> 50, C -> 100, D -> 500, M -> 1000
  const birler = {
    0: "",
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "XI",
  };

  const onlar = {
    1: "X",
    2: "XX",
    3: "XXX",
    4: "XL",
    5: "L",
    6: "LX",
    7: "LXX",
    8: "LXX",
    9: "XC",
  };
  const yüzler = {
    1: "C",
    2: "CC",
    3: "CCC",
    4: "CD",
    5: "D",
    6: "DC",
    7: "DCC",
    8: "DCCC",
    9: "CM",
  };

  function romenNumber() {
    const n = document.getElementById("sayi").value;
    const romen = document.getElementById("romen");
    const button = document.getElementById("btn");
    if (n < 10 && n > 0) {
      romen.innerHTML = birler[`${n}`];
      console.log(birler[`${n}`]);
    } else if (n < 100 && n > 9) {
      let bir = n % 10;
      let on = Math.floor(n / 10);
      romen.innerHTML = onlar[`${on}`] + birler[`${bir}`];
      console.log(onlar[`${on}`] + birler[`${bir}`]);
    } else if (n < 1000 && n > 99) {
      let bir = (n % 100) % 10;
      let on = Math.floor((n % 100) / 10);
      let yüz = Math.floor(n / 100);
      romen.innerHTML =
        yüzler[`${yüz}`] + onlar[`${on}`] + birler[`${bir}`];
      console.log(yüzler[`${yüz}`] + onlar[`${on}`] + birler[`${bir}`]);
    }
  }