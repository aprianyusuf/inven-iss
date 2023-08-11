import { React, useState, useEffect } from "react";
import WrapperNavbar from "../../templates/WrapperNavbar";
import { AutoComplete } from "primereact/autocomplete";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";

const ListBarang = () => {
  const [value, setValue] = useState("");
  const [selectedKategori, setSelectedKategori] = useState(null);
  const [selectedGudang, setSelectedGudang] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const kategori = [
    { name: "Bahan Habis Pakai", code: "BHP" },
    { name: "Alat Kesehatan", code: "ALKES" },
    { name: "Alat dan Bahan Gigi", code: "GIGI" },
    { name: "Kimia", code: "KIMIA" },
    { name: "Alat Tulis Kantor", code: "ATK" },
  ];
  const gudang = [
    { name: "Intan Sarana Sejahtera", code: "ISS" },
    { name: "Nawawi Sumber Sejahtera", code: "NSS" },
    { name: "Cakra Anugerah Sejati", code: "CAS" },
    { name: "GMA Sukses", code: "GMA" },
    { name: "Mitra Medika Sejati", code: "MMS" },
  ];
  const datatable = [
    { code: "1", name: "Test", category: "BHP", quantity: "100" },
  ];
  return (
    <div class="p-6">
      <div class="text-2xl mb-5">List Barang</div>
      <div className="card flex justify-between">
        <div>
          <span className="p-float-label p-input-icon-right">
            <i className="pi pi-search" />
            <InputText
              id="searc"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <label htmlFor="search">Kata Kunci</label>
          </span>
        </div>
        <div className="card flex gap-5">
          <span className="p-float-label">
            <Dropdown
              inputId="dd-kategori"
              value={selectedKategori}
              onChange={(e) => setSelectedKategori(e.value)}
              options={kategori}
              optionLabel="code"
              showClear
              className="w-40 fixed"
            />
            <label className="w-14rem" htmlFor="dd-kategori">
              Pilih Kategori
            </label>
          </span>
          <span className="p-float-label">
            <Dropdown
              inputId="dd-gudang"
              value={selectedGudang}
              onChange={(e) => setSelectedGudang(e.value)}
              options={gudang}
              optionLabel="code"
              showClear
              className="w-40 fixed"
            />
            <label className="w-14rem" htmlFor="dd-gudang">
              Pilih Gudang
            </label>
          </span>
          <span className="p-float-label">
            <Dropdown
              inputId="dd-filter"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.value)}
              options={kategori}
              optionLabel="code"
              showClear
              className="w-40 fixed"
            />
            <label className="w-14rem" htmlFor="dd-filter">
              Pilih Filter
            </label>
          </span>
        </div>
      </div>
      <div className="card p-2 mt-5">
        <DataTable
          value={datatable}
          sortMode="multiple"
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column
            field="code"
            header="Code"
            sortable
            style={{ width: "25%" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            style={{ width: "25%" }}
          ></Column>
          <Column
            field="category"
            header="Category"
            sortable
            style={{ width: "25%" }}
          ></Column>
          <Column
            field="quantity"
            header="Quantity"
            sortable
            style={{ width: "25%" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default WrapperNavbar({ Component: ListBarang });
