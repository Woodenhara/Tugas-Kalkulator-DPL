var input = require('readline-sync');
console.clear()
no1 = input.questionInt("input nomor pertama: ");
no2 = input.questionInt("input nomor kedua: ");

console.log("██╗  ██╗██╗███████╗ █████╗  █████╗ ██████╗ ██╗██╗   ██╗ █████╗ ██╗  ██╗ █████╗ ")
console.log("╚██╗██╔╝██║██╔════╝██╔══██╗██╔══██╗██╔══██╗██║╚██╗ ██╔╝██╔══██╗██║  ██║██╔══██╗")
console.log(" ╚███╔╝ ██║███████╗███████║███████║██████╔╝██║ ╚████╔╝ ███████║███████║███████║")
console.log(" ██╔██╗ ██║╚════██║██╔══██║██╔══██║██╔══██╗██║  ╚██╔╝  ██╔══██║██╔══██║██╔══██║")
console.log("██╔╝ ██╗██║███████║██║  ██║██║  ██║██████╔╝██║   ██║   ██║  ██║██║  ██║██║  ██║")
console.log("╚═╝  ╚═╝╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝")
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    console.log("         1. Penjumlahan           ")
    console.log("         2. Pengurangan           ")
    console.log("         3.  Perkalian            ")
    console.log("         4.  Pembagian            ")
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
input.requestionlnt("pilih metode yang kamu inginkan : ")

if (metode == 1) {
    console.log("Hasilnya adalah" , no1 + no2);
    }
else if (metode == 2) {
    console.log("Hasilnya adalah" , no1 - no2);
    }
else if (metode == 3) {
    console.log("Hasilnya adalah" , no1 * no2);
    }
else if (metode == 4) {
    console.log("Hasilnya adalah" , no1 / no2);
    }
else if (metode >= 5) {
    console.log("Tolong input angka diantara 1-4!")
}
