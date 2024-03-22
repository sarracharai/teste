import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  ngOnInit(): void {
    this.initializeNavbar();
  }

  initializeNavbar() {
    const closeBtn = document.querySelector("#btn") as HTMLElement | null;
    const searchBtn = document.querySelector(".bx-search") as HTMLElement | null;

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        const sidebar = document.querySelector(".sidebar") as HTMLElement | null;
        if (sidebar) {
          sidebar.classList.toggle("open");
          this.menuBtnChange(closeBtn, sidebar);
        }
      });
    }

    if (searchBtn) {
      searchBtn.addEventListener("click", () => {
        const sidebar = document.querySelector(".sidebar") as HTMLElement | null;
        if (sidebar) {
          sidebar.classList.toggle("open");
          this.menuBtnChange(closeBtn, sidebar);
        }
      });
    }
  }

  menuBtnChange(closeBtn: HTMLElement | null, sidebar: HTMLElement | null) {
    if (closeBtn && sidebar) {
      if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    }
  }
}
