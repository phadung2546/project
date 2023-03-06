<template>
  <v-app>
    <v-toolbar app :elevation="8">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline">
        <span>
          <button @click="Home()" class="hidden-sm-and-down">
            <img src="./card/RentCar.jpg" width="80" /></button
        ></span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <div
          class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height"
        >
          <v-btn variant="plain" class="hidden-sm-and-down">
            <RouterLink class="link" to="/home">Home</RouterLink>
          </v-btn>
          <v-btn
            @click="reserve()"
            v-if="logout"
            variant="plain"
            class="hidden-sm-and-down"
          >
            <RouterLink class="link" to="/about">reserve</RouterLink>
          </v-btn>

          <v-btn variant="plain" align-center>
            <RouterLink class="hidden-sm-and-down" to="/Login">Login</RouterLink>
          </v-btn>
          <v-btn icon>
            <v-icon class="hidden-sm-and-down" @click="LogOut()" v-if="logout"
              >mdi-export</v-icon
            >
          </v-btn>
        </div>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer color="black" app v-model="drawer">
      <v-list-item></v-list-item>
      <v-list-item>
        <v-avatar align-center text-center size="70px" color="#fff">
          <center>
            <button @click="profile()">
              <v-img
                :width="82"
                aspect-ratio="1/1"
                cover
                src="https://th.bing.com/th/id/R.1ce5f2f28d2108efdf2762506d9ef7c5?rik=Jix%2fZD1vxubHJg&pid=ImgRaw&r=0"
              ></v-img>
            </button>
          </center>
        </v-avatar>
        <ul v-for="(item, index) in dataprofile" :key="index">
          <br />
          <br />
          <h3>{{ item.data.email }}</h3>
        </ul>
        <template v-slot:append>
          <v-btn variant="text" icon="mdi-chevron-left" @click="drawer = !drawer"></v-btn>
        </template>
      </v-list-item>
      <v-list-item></v-list-item>
      <v-list-item
        prepend-icon="mdi-account"
        title="Login"
        value="about"
        @click="login()"
        variant="plain"
      ></v-list-item>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-home-city"
          title="HOME"
          value="home"
          @click="Home()"
          variant="plain"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-book"
          title="Reserve"
          value="about"
          @click="reserve()"
          v-if="logout"
          variant="plain"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-book"
          title="Booking Hitory"
          value="about"
          @click="history()"
          v-if="logout"
          variant="plain"
        ></v-list-item>

        <v-list-item
          prepend-icon="mdi-car"
          title="CAR"
          value="about"
          @click="car()"
          variant="plain"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-message-reply-text"
          title="Contact US"
          value="about"
          variant="plain"
          @click="contact()"
        ></v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="LogOut()" v-if="logout"> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main>
      <RouterView />
    </v-main>
    <v-footer class="bg-grey-lighten-1 text-center d-flex flex-column">
      <div>
        <v-btn variant="text" class="mx-4">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn variant="text" class="mx-4">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn variant="text" class="mx-4">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
      </div>

      <div class="pt-2">
        <h3>email caRent44@gmail.com เบอร์โทรติดต่อ 44444</h3>
      </div>

      <v-divider></v-divider>

      <div>{{ new Date().getFullYear() }} — <strong>caRent</strong></div>
    </v-footer>
  </v-app>

  <footer></footer>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, ref } from "vue";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";
import {
  collection,
  /*   setDoc, */
  getDocs,
 
  query,
  where,
  
} from "firebase/firestore";
import { db } from "../main";

const router = useRouter();
const logout = ref(false);
const drawer = ref(true);

onMounted(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      logout.value = true;
      console.log("llllllllllllll");
      check(user.uid);

      // ...
    } else {
      logout.value = false;
      // ...
    }
  });
});
function reserve() {
  router.push("/about");
}
function Home() {
  router.push("/home");
}
function login() {
  router.push("/login");
}
function car() {
  router.push("/Car");
}
function contact() {
  router.push("/contact");
}
function history() {
  router.push("/hitory");
}
function profile() {
  router.push("/profile");
}

function LogOut() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      //
      router.push("/home");
      alert("Sign-out successful.");
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
}

const dataprofile = ref([]);

async function check(userID) {
  const q = query(collection(db, "users"), where("uid", "==", userID));
  if (q) {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log("ddd" + doc.id, " => ", doc.data());

      const mydata = ref({ id: doc.id, data: doc.data() });
      console.log("data" + mydata.value);
      dataprofile.value.push(mydata.value);
    });
  } else {
    alert("ข้อมูลไม่ถูกต้อง");
    console.log("plese Login");
  }
}
</script>

<style>
@media (min-width: 1022px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    color: black;
  }

  .circle {
    border-radius: 100%;
    padding: 5px;
    margin: 0px;
    margin-top: 5px;
    height: 70px;
    margin-left: 00px;
    border: 2px solid #fff;
  }

  /* .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;
  }

  nav {
    display: flex;
    padding: 25px;

    .branding {
      display: flex;
      align-items: center;
      color: #000;
      text-decoration: none;
    }
  }
} */
}
</style>
