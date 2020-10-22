//cara import di node
const express = require('express');
//selanjutnya panggil method express nya
const app = express();

//.use()digunakan untuk menjalankan app di atas
app.use(() => {
	console.log('hi there');
	console.log('hi ivan');
	console.log('ya iya ada apa');
});

// untuk jalankan server nya di port tertentu jalankan syntax di bawah
app.listen(4000);
