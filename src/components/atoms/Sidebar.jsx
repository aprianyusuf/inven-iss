import React from "react";
import { Button } from "primereact/button";

const Sidebar = () => {
  return (
    <div class="fixed z-[9999] top-[3.75rem] h-[calc(100vh-3.75rem)] w-[12.25rem] border-r">
      <div class="grid gap-y-2 ">
        <Button icon="pi pi-home" severity="info" label="Beranda" className="w-48" text />
        <Button icon="pi pi-box" severity="info" label="List Barang" className="w-48" text />
        <Button icon="pi pi-truck" severity="info" label="Supplier" className="w-48" text />
        <Button icon="pi pi-users" severity="info" label="Pelanggan" className="w-48" text />
        <Button icon="pi pi-tag" severity="info" label="Penawaran" className="w-48" text />
        <Button icon="pi pi-file" severity="info" label="Laporan" className="w-48" text />
      </div>
    </div>
  );
};

export default Sidebar;
