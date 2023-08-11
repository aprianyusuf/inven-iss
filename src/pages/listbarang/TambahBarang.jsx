import { React, useState } from "react";
import WrapperNavbar from "../../templates/WrapperNavbar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

const TambahBarang = () => {
  const [nama, setNama] = useState("");
  const [stok, setStok] = useState("");
  const [modal, setModal] = useState("");
  const [jual, setJual] = useState("");
  const [ecat, setEcat] = useState("");
  const [link, setLink] = useState("");
  const [selectedKategori, setSelectedKategori] = useState(null);
  const [selectedMerk, setSelectedMerk] = useState(null);
  const [selectedSatuan, setSelectedSatuan] = useState(null);
  const kategori = [
    { name: "Bahan Habis Pakai", code: "BHP" },
    { name: "Alat Kesehatan", code: "ALKES" },
    { name: "Alat dan Bahan Gigi", code: "GIGI" },
    { name: "Kimia", code: "KIMIA" },
    { name: "Alat Tulis Kantor", code: "ATK" },
  ];
  const merk = [
    { name: "Easy Touch", code: "ET" },
    { name: "BJess", code: "BJ" },
    { name: "Terumo", code: "TER" },
    { name: "Onemed", code: "OM" },
    { name: "Mindray", code: "MR" },
  ];
  const satuan = [
    { name: "Buah" },
    { name: "Set" },
    { name: "Pak" },
    { name: "Box" },
    { name: "Botol" },
  ];
  return (
    <div class="p-6">
      <div class="text-2xl mb-5 text-center">Tambah Barang</div>
      <div className="card border mx-40 gap-5">
        <div className="card flex justify-between px-20 my-6">
          <div>
            <span className="p-float-label">
              <InputText
                id="name"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
              <label htmlFor="name">Nama Barang</label>
            </span>
          </div>
          <div>
            <span className="p-float-label">
              <Dropdown
                inputId="dd-satuan"
                value={selectedSatuan}
                onChange={(e) => setSelectedSatuan(e.value)}
                options={satuan}
                optionLabel="name"
                showClear
                className="w-52 fixed"
              />
              <label className="w-14rem" htmlFor="dd-satuan">
                Pilih Satuan
              </label>
            </span>
          </div>
        </div>
        <div className="card flex justify-between px-20 my-6">
          <div>
            <span className="p-float-label">
              <InputText
                id="stok"
                value={stok}
                onChange={(e) => setStok(e.target.value)}
              />
              <label htmlFor="stok">Stok</label>
            </span>
          </div>
          <div>
            <span className="p-float-label">
              <Dropdown
                inputId="dd-kategori"
                value={selectedKategori}
                onChange={(e) => setSelectedKategori(e.value)}
                options={kategori}
                optionLabel="code"
                showClear
                className="w-52 fixed"
              />
              <label className="w-14rem" htmlFor="dd-kategori">
                Pilih Kategori
              </label>
            </span>
          </div>
        </div>
        <div className="card flex justify-between px-20 my-6">
          <div>
            <span className="p-float-label">
              <InputText
                keyfilter="int"
                id="modal"
                value={modal}
                onChange={(e) => setModal(e.target.value)}
              />
              <label htmlFor="modal">Modal ( Rp )</label>
            </span>
          </div>
          <div>
            <span className="p-float-label">
              <Dropdown
                inputId="dd-merk"
                value={selectedMerk}
                onChange={(e) => setSelectedMerk(e.value)}
                options={merk}
                optionLabel="name"
                showClear
                className="w-52 fixed"
              />
              <label className="w-14rem" htmlFor="dd-merk">
                Pilih Merk
              </label>
            </span>
          </div>
        </div>
        <div className="card flex justify-between px-20 my-6">
          <div>
            <span className="p-float-label">
              <InputText
                keyfilter="int"
                id="hargajual"
                value={jual}
                onChange={(e) => setJual(e.target.value)}
              />
              <label htmlFor="hargajual">Harga Jual ( Rp ) </label>
            </span>
          </div>
          <div>
            <span className="p-float-label">
              <InputText
                id="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
              <label htmlFor="link">Link E - Catalogue</label>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrapperNavbar({ Component: TambahBarang });
