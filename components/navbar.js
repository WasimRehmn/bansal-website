export const navbar = () => {
  return `
    <div class="head_container">
        <a href="/" class="logo">
          <img src="assets/images/vikas_bansal_logo.png" , alt="logo" />
        </a>
        <div class="menu" id="myTopnav">
          <ul>
            <a
              href="javascript:void(0);"
              style="font-size: 15px"
              class="icon"
              onclick="openNav()"
              ><i class="fa-solid fa-bars"></i
            ></a>
            <li><a href="/">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="/books.html">Books</a></li>
            <li><a href="/press.html">Press</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>

      <div id="mySidenav" class="sidenav">
        <a href="/" class="sidelogo">
          <img src="assets/images/vikuBhaiya.png" , alt="logo" />
        </a>
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
          >&times;</a
        >

        <a href="/">Home</a>
        <a href="/about.html">About</a>
        <a href="/books.html">Books</a>
        <a href="/press.html">Press</a>
        <a href="/contact.html">Contact</a>
        <p style="color.html: #1c3664; text-align: center">
          Vikas Bansal &copy; 2022
        </p>
      </div>
    `
}