import React, { Component } from "react";
import { Button, Form, Col, Card } from "react-bootstrap";
import Helmet from "react-helmet"

var formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR"
});

function calculate() {
  var masakerja = Number(document.getElementById("masakerja").value);
  var gajipokok = Number(document.getElementById("gajipokok").value);
  var pmtk = Number(document.getElementById("pmtk").value);

  var penghargaan = 0;
  var pesangon = 0;

  if (masakerja > 3) {
    if (masakerja > 24) penghargaan = gajipokok * 10;
    else if (masakerja > 21) {
      penghargaan = 8 * gajipokok;
    } else if (masakerja > 18) {
      penghargaan = 7 * gajipokok;
    } else if (masakerja > 15) {
      penghargaan = 6 * gajipokok;
    } else if (masakerja > 12) {
      penghargaan = 5 * gajipokok;
    } else if (masakerja > 9) {
      penghargaan = 4 * gajipokok;
    } else if (masakerja > 6) {
      penghargaan = 3 * gajipokok;
    } else penghargaan = 2 * gajipokok;
  }
  else penghargaan = 0;

  if (masakerja > 8) pesangon = gajipokok * 9;
  else pesangon = gajipokok * masakerja;

  if (pmtk === 1 || pmtk === 5 || pmtk === 6 || pmtk === 7) pesangon = pesangon * 2;
  else if (pmtk === 8 ){
    penghargaan = penghargaan * 2;
    pesangon = pesangon * 2;
  } 
  else;
  var totalPesangon = pesangon + penghargaan;

  var penggantianHak = 0.15 * totalPesangon;

  var sisaCuti =
    (gajipokok / 30) * Number(document.getElementById("sisacuti").value);

  totalPesangon = totalPesangon + penggantianHak + sisaCuti;

  document.getElementById("pesangon").innerHTML =
  "Uang pesangon = " + formatter.format(pesangon);

document.getElementById("penghargaan").innerHTML =
"Uang penghargaan masa kerja = " + formatter.format(penghargaan);

document.getElementById("penggantianhak").innerHTML =
"Uang penggantian hak = " + formatter.format(penggantianHak);

document.getElementById("uangsisacuti").innerHTML = 
"Uang pengganti sisa cuti = " + formatter.format(sisaCuti);

  document.getElementById("totalpesangon").innerHTML =
    "Total pesangon anda " + formatter.format(totalPesangon);
}

export default class Pesangon extends Component {
  render() {
    return (
      <div>
            <Helmet>      
            <title>Perhitungan Pesangon</title>
            <meta name="Menghitung pesangon yang didapatkan saat PHK" content="Pada aplikasi ini anda dapat menghitung pesangon yang anda dapatkan saat PHK" />
            </Helmet>

        <h4>Perhitungan Pesangon</h4>
        <br></br>
        <p className="pesangon-text">
          Aplikasi perhitungan pesangon ini dibuat berdasarkan Pasal 156 ayat 2
          Undang – Undang no. 13 tahun 2003 tentang perhitungan pesangon, pasal
          156 ayat 3 Undang – Undang no. 13 tahun 2003 tentang perhitungan uang
          penghargaan, dan pasal 156 UU No.13/2003 tentang uang penggantian hak.{" "}
        </p>
        <Card body>
          <Card.Header>Perhitungan Pesangon PHK</Card.Header>
          <Form>
            <Form.Row>
              <Form.Group as={Col} md="3" controlId="formBasicFrequency">
                <Form.Label>Masa Kerja</Form.Label>
                <Form.Control id="masakerja" as="select">
                  <option value="1">0 ke 1 Tahun</option>
                  <option value="2">1 ke 2 Tahun</option>
                  <option value="3">2 ke 3 Tahun</option>
                  <option value="4">3 ke 4 Tahun</option>
                  <option value="5">4 ke 5 Tahun</option>
                  <option value="6">5 ke 6 Tahun</option>
                  <option value="7">6 ke 7 Tahun</option>
                  <option value="8">7 ke 8 Tahun</option>
                  <option value="9">8 ke 9 Tahun</option>
                  <option value="10">9 ke 10 Tahun</option>
                  <option value="11">10 ke 11 Tahun</option>
                  <option value="12">11 ke 12 Tahun</option>
                  <option value="13">12 ke 13 Tahun</option>
                  <option value="14">13 ke 14 Tahun</option>
                  <option value="15">14 ke 15 Tahun</option>
                  <option value="16">15 ke 16 Tahun</option>
                  <option value="17">16 ke 17 Tahun</option>
                  <option value="18">17 ke 18 Tahun</option>
                  <option value="19">18 ke 19 Tahun</option>
                  <option value="20">19 ke 20 Tahun</option>
                  <option value="21">20 ke 21 Tahun</option>
                  <option value="22">21 ke 22 Tahun</option>
                  <option value="23">22 ke 23 Tahun</option>
                  <option value="24">23 ke 24 Tahun</option>
                  <option value="25">Lebih dari 24 Tahun</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} md="3">
                <Form.Label>Gaji Pokok</Form.Label>
                <Form.Control
                  id="gajipokok"
                  type="number"
                  placeholder="Gaji Pokok"
                >
                </Form.Control>
              </Form.Group>
{/*
              <Form.Group as={Col} md="3">
                <Form.Label>Kompensasi PMTK</Form.Label>
                <Form.Control id="pmtk" as="select">
                  <option value="1">1</option>
                  <option value="2">2</option>
                </Form.Control>
              </Form.Group>
    */}
    
              <Form.Group as={Col} md="3">
                <Form.Label>Alasan PHK</Form.Label>
                <Form.Control id="pmtk" as="select">
                  <option value="1">Perusahaan melakukan efisiensi</option>
                  <option value="2">Perusahaan pailit</option>
                  <option value="3">Perusahaan tutup karena merugi</option>
                  <option value="4">Perubahan Status, Penggabungan, Peleburan & Pekerja Tidak Bersedia</option>
                  <option value="5">Perubahan Status, Penggabungan, Peleburan & Pengusaha Tidak Bersedia</option>
                  <option value="6">Pekerja Mencapai Usia Pensiun Normal</option>
                  <option value="7">Pekerja Meninggal Dunia</option>
                  <option value="8">Pekerja Sakit Berkepanjangan dan cacat akibat kecelakaan kerja</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} md="3">
                <Form.Label>Sisa Cuti</Form.Label>
                <Form.Control
                  id="sisacuti"
                  type="number"
                  placeholder="Sisa Cuti"
                />
              </Form.Group>
            </Form.Row>
          </Form>

          <Button onClick={calculate} variant="success" type="calculate">
            Hitung
          </Button>
          <br></br>
          <br></br>
          <h6 id="pesangon"> </h6>
          <br></br>
          <h6 id="penghargaan"> </h6>
          <br></br>
          <h6 id="penggantianhak"> </h6>
          <br></br>
          <h6 id="uangsisacuti"> </h6>
          <br></br>
          <h5 id="totalpesangon"> </h5>
        </Card>
      </div>
    );
  }
}
