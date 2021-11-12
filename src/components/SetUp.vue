<template>
  <div id="setUp">
    <div class="setUpCard">
      <div
        v-show="disp == 9 || der == true"
        @click="changeDisp(10)"
        class="setUpCardItem"
      >
        <div class="setUpCardItemLeft">
          <div class="setUpCardItemLeftIcon">
            <svg
              t="1636258728985"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6010"
              width="16"
              height="16"
            >
              <path
                d="M781.824 343.466667 242.133333 343.466667c-11.797333 0-21.354667 9.557333-21.354667 21.354667 0 11.797333 9.557333 21.354667 21.354667 21.354667l539.690667 0c11.84 0 21.376-9.578667 21.376-21.354667C803.2 353.045333 793.664 343.466667 781.824 343.466667z"
                p-id="6011"
              ></path>
              <path
                d="M242.133333 533.376l441.578667 0c11.84 0 21.376-9.6 21.376-21.376s-9.536-21.354667-21.376-21.354667L242.133333 490.645333c-11.797333 0-21.354667 9.557333-21.354667 21.354667S230.336 533.376 242.133333 533.376z"
                p-id="6012"
              ></path>
              <path
                d="M781.824 637.781333 242.133333 637.781333c-11.797333 0-21.354667 9.557333-21.354667 21.376 0 11.84 9.557333 21.376 21.354667 21.376l539.690667 0c11.84 0 21.376-9.536 21.376-21.376C803.2 647.36 793.664 637.781333 781.824 637.781333z"
                p-id="6013"
              ></path>
              <path
                d="M683.712 785.002667 242.133333 785.002667c-11.797333 0-21.354667 9.557333-21.354667 21.376 0 11.84 9.557333 21.354667 21.354667 21.354667l441.578667 0c11.84 0 21.376-9.514667 21.376-21.354667C705.088 794.56 695.552 785.002667 683.712 785.002667z"
                p-id="6014"
              ></path>
              <path
                d="M781.824 122.666667l-35.008 0c-12.906667-28.864-41.770667-49.088-75.370667-49.088l-66.922667 0C594.794667 31.509333 556.949333 0 512 0c-45.034667 0-82.816 31.509333-92.544 73.578667l-66.922667 0c-33.621333 0-62.485333 20.224-75.413333 49.088l-23.765333 0c-95.765333 0-179.776 78.762667-179.776 168.554667L73.578667 855.466667c0 89.749333 84.010667 168.533333 179.776 168.533333l528.469333 0c92.906667 0 168.576-75.626667 168.554667-168.533333L950.378667 291.221333C950.4 198.272 874.773333 122.666667 781.824 122.666667zM352.533333 116.309333l85.888 0c11.776 0 21.354667-9.557333 21.354667-21.354667 0-28.778667 23.445333-52.224 52.224-52.224 28.8 0 52.202667 23.424 52.202667 52.224 0 11.797333 9.536 21.354667 21.333333 21.354667l85.909333 0c21.994667 0 39.957333 17.92 39.957333 39.978667 0 22.037333-17.962667 39.978667-39.957333 39.978667l-318.933333 0c-22.058667 0-39.978667-17.941333-39.978667-39.978667C312.554667 134.229333 330.517333 116.309333 352.533333 116.309333zM907.648 855.466667c0 69.376-56.448 125.802667-125.802667 125.802667L253.354667 981.269333c-73.002667 0-137.045333-58.794667-137.045333-125.802667L116.309333 291.221333c0-67.029333 64.042667-125.824 137.045333-125.824l17.386667 0c4.608 41.28 39.317333 73.6 81.770667 73.6l318.933333 0c42.453333 0 77.141333-32.32 81.749333-73.6l28.629333 0c69.376 0 125.802667 56.448 125.802667 125.824L907.626667 855.466667z"
                p-id="6015"
              ></path>
            </svg>
          </div>
          <div class="setUpCardItemLeftText">日志</div>
        </div>
        <div class="setUpCardItemRight">
          <div class="setUpCardItemRightIcon">
            <svg
              t="1636259374384"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6835"
              width="12"
              height="12"
            >
              <path
                d="M660.224 512L330.24 183.36a31.936 31.936 0 1 1 44.992-45.248l352.512 350.72 0.64 0.576a31.936 31.936 0 0 1 0 45.184s-0.512 0.32-0.64 0.576l-352.512 350.72a31.936 31.936 0 1 1-44.992-45.248L660.224 512z"
                fill="#888888"
                p-id="6836"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        v-if="disp == 10"
        @click="changeDisp(9)"
        class="fandramCardBouttondropdown"
      >
        <div class="fandramCardBouttondropdownCard" @click="open">
          <div
            class="fandramCardBouttondropdownCardInfo"
            style="background-color: #94b5e9"
          >
            <div class="DaoHanCardLeftPross"></div>
            <div class="fandramCardBouttondropdownCardText">查看日志</div>
          </div>
        </div>
      </div>
    </div>
    <div class="setUpCard">
      <div
        v-show="disp == 12 || der == true"
        @click="changeDisp(11)"
        class="setUpCardItem"
      >
        <div class="setUpCardItemLeft">
          <div class="setUpCardItemLeftIcon">
            <svg
              t="1636259771881"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="7727"
              width="16"
              height="16"
            >
              <path
                d="M515.1 911.758c-161.393 0-260.494-23.495-302.99-71.794-22.442-25.486-21.333-49.521-20.48-56.291 0.455-6.03 15.53-189.924 28.217-275.655-4.608-3.13-14.393-7.054-20.053-9.33a229.831 229.831 0 0 1-13.881-5.888c-18.717-8.79-57.572-28.046-57.572-28.046-48.298-22.187-76.942-50.404-83.996-83.4-5.66-26.424 3.982-49.18 14.876-61.695a40.847 40.847 0 0 1 4.182-4.125L290.475 121.8a39.908 39.908 0 0 1 63.8 17.607c24.89 73.7 97.025 84.736 137.842 84.736 10.866 0 17.778-0.853 17.835-0.882a42.264 42.264 0 0 1 10.553 0.029s6.77 0.825 17.266 0.825c40.021 0 110.79-10.98 135.253-84.566a39.964 39.964 0 0 1 64.085-17.607L960.91 315.676a37.898 37.898 0 0 1 4.125 4.153c10.78 12.516 20.28 35.3 14.592 61.64-7.055 32.824-35.3 60.984-83.94 83.626 0 0.029-37.49 18.887-55.694 27.563-4.096 1.934-8.761 3.868-13.71 5.888-5.519 2.247-15.104 6.144-19.599 9.244 12.573 86.471 27.392 269.881 28.018 277.703 0.683 5.007 1.735 29.184-20.878 54.813-42.325 48.1-140.032 71.452-298.724 71.452zM271.56 786.404c6.712 7.936 48.952 45.425 243.54 45.425 192.228 0 233.188-37.575 239.531-45.312-2.987-35.925-16.384-195.242-27.25-268.686-9.102-61.582 47.531-84.594 68.836-93.24 3.413-1.395 6.656-2.675 9.472-4.011 17.92-8.534 55.097-27.25 55.154-27.279 24.462-11.434 34.474-20.565 38.4-25.287l-175.36-151.78c-52.793 78.194-144.356 87.809-186.084 87.809-9.927 0-17.835-0.54-22.699-0.967a255.602 255.602 0 0 1-22.983 0.967c-42.325 0-135.253-9.671-188.643-88.292l-178.49 152.292c4.068 4.75 14.11 13.71 37.832 24.604 1.138 0.54 38.855 19.285 57.06 27.819 2.872 1.337 6.172 2.645 9.642 4.039 21.59 8.647 78.905 31.602 69.66 93.411-11.178 74.24-24.945 236.345-27.619 268.488z"
                p-id="7728"
              ></path>
            </svg>
          </div>
          <div class="setUpCardItemLeftText">主题</div>
        </div>
        <div class="setUpCardItemRight">
          <div class="setUpCardItemRightIcon">
            <svg
              t="1636259374384"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6835"
              width="12"
              height="12"
            >
              <path
                d="M660.224 512L330.24 183.36a31.936 31.936 0 1 1 44.992-45.248l352.512 350.72 0.64 0.576a31.936 31.936 0 0 1 0 45.184s-0.512 0.32-0.64 0.576l-352.512 350.72a31.936 31.936 0 1 1-44.992-45.248L660.224 512z"
                fill="#888888"
                p-id="6836"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        v-if="disp == 11"
        @click="changeDisp(12)"
        class="fandramCardBouttondropdown"
      >
        <div class="fandramCardBouttondropdownCard">
          <div
            class="fandramCardBouttondropdownCardInfo"
            style="background-color: #94b5e9"
          >
            <div class="DaoHanCardLeftPross"></div>
            <div class="fandramCardBouttondropdownCardText">浅色</div>
          </div>
        </div>
        <div class="fandramCardBouttondropdownCard">
          <div class="fandramCardBouttondropdownCardInfo">
            <div class="DaoHanCardLeftProssNo"></div>
            <div class="fandramCardBouttondropdownCardText">深色</div>
          </div>
        </div>
      </div>
    </div>
    <div class="setUpCard">
      <div
        v-show="disp == 13 || der == true"
        @click="changeDisp(14)"
        class="setUpCardItem"
      >
        <div class="setUpCardItemLeft">
          <div class="setUpCardItemLeftIcon">
            <svg
              t="1636260385510"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="12341"
              width="16"
              height="16"
            >
              <path
                d="M338.929577 331.71831m-331.718309 0a331.71831 331.71831 0 1 0 663.436619 0 331.71831 331.71831 0 1 0-663.436619 0Z"
                fill="#8CF6FB"
                p-id="12342"
              ></path>
              <path
                d="M894.197183 807.661972h-764.394366C62.016901 807.661972 7.211268 752.856338 7.211268 685.070423v-562.478874C7.211268 54.805634 62.016901 0 129.802817 0h764.394366C961.983099 0 1016.788732 54.805634 1016.788732 122.591549v562.478874c0 67.785915-54.805634 122.591549-122.591549 122.591549zM944.676056 122.591549C944.676056 95.188732 921.6 72.112676 894.197183 72.112676h-764.394366C102.4 72.112676 79.323944 95.188732 79.323944 122.591549v562.478874C79.323944 712.473239 102.4 735.549296 129.802817 735.549296h764.394366c27.402817 0 50.478873-23.076056 50.478873-50.478873v-562.478874z"
                fill="#3C2DCB"
                p-id="12343"
              ></path>
              <path
                d="M317.295775 951.887324h389.40845c20.191549 0 36.056338 15.864789 36.056338 36.056338S726.895775 1024 706.704225 1024h-389.40845c-20.191549 0-36.056338-15.864789-36.056338-36.056338s15.864789-36.056338 36.056338-36.056338z"
                fill="#D098FF"
                p-id="12344"
              ></path>
            </svg>
          </div>
          <div class="setUpCardItemLeftText">资源切换</div>
        </div>
        <div class="setUpCardItemRight">
          <div class="setUpCardItemRightIcon">
            <svg
              t="1636259374384"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6835"
              width="12"
              height="12"
            >
              <path
                d="M660.224 512L330.24 183.36a31.936 31.936 0 1 1 44.992-45.248l352.512 350.72 0.64 0.576a31.936 31.936 0 0 1 0 45.184s-0.512 0.32-0.64 0.576l-352.512 350.72a31.936 31.936 0 1 1-44.992-45.248L660.224 512z"
                fill="#888888"
                p-id="6836"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        v-if="disp == 14"
        @click="changeDisp(13)"
        class="fandramCardBouttondropdown"
      >
        <div class="fandramCardBouttondropdownCard">
          <div
            class="fandramCardBouttondropdownCardInfo"
            style="background-color: #94b5e9"
          >
            <div class="DaoHanCardLeftPross"></div>
            <div class="fandramCardBouttondropdownCardText">安全资源</div>
          </div>
        </div>
        <div class="fandramCardBouttondropdownCard">
          <div class="fandramCardBouttondropdownCardInfo">
            <div class="DaoHanCardLeftProssNo"></div>
            <div class="fandramCardBouttondropdownCardText">灰色资源</div>
          </div>
        </div>
      </div>
    </div>
    <div class="setUpCard">
      <div
        v-show="disp == 15 || der == true"
        @click="changeDisp(16)"
        class="setUpCardItem"
      >
        <div class="setUpCardItemLeft">
          <div class="setUpCardItemLeftIcon">
            <svg
              t="1636260423215"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="13222"
              width="16"
              height="16"
            >
              <path
                d="M498.1 511.8m-348.1 0a348.1 348.1 0 1 0 696.2 0 348.1 348.1 0 1 0-696.2 0Z"
                fill="#E5ECFF"
                p-id="13223"
              ></path>
              <path
                d="M415.3 743.9c-99.5-49.7-240.4-41.4-149.2-232.1 31.8-66.6-28.2-99.4-98.3-109.8-11.5 34.5-17.8 71.4-17.8 109.8 0 185.1 144.5 336.3 326.8 347.4 3.3-37.6-5.1-87.1-61.5-115.3zM630.8 487s41.4 49.7-24.9 66.3c-66.3 16.6-107.7 49.7-91.2 116s0 66.3 91.2 58 116-91.2 116-107.7c0-16.6 24.9-107.7-24.9-132.6-49.7-24.9-58-41.5-66.2 0z"
                fill="#5B79FB"
                p-id="13224"
              ></path>
              <path
                d="M957.9 440.1c-6.3-45.3-59.4-77.8-153.5-94.1h-0.2c6.5 12 12.3 24.4 17.4 37.2 61.7 13.7 99.9 36.1 103.5 61.5 4 28.4-34.6 65.1-103.3 98.2-76.2 36.8-180.7 65.8-294.2 81.7-113.5 15.9-221.9 16.7-305.3 2.3-75.1-13-122.4-37.7-126.3-66-2.9-20.9 17.3-46.3 55.7-71.5-0.2-0.3-0.5-0.5-0.7-0.7 0.9-13.9 2.7-27.5 5.2-40.8-66.5 37.4-98.6 77.8-93 117.7 6.3 45.3 59.4 77.8 153.5 94.1 41.4 7.1 88.5 10.7 139.1 10.7 55.5 0 115.3-4.3 176.4-12.8 116.8-16.4 224.7-46.4 304-84.7 85.9-41.6 128-87.5 121.7-132.8z"
                fill="#FF7E71"
                p-id="13225"
              ></path>
              <path
                d="M514.9 164.1c-5.5-0.2-11.1-0.4-16.7-0.4-125.4 0-235.2 66.3-296.5 165.7 53.4-0.6 97.9-25.6 110.5-59.3 9.3 0.9 18.8 1.4 28.5 1.4 59.3 0 111.9-17.4 145.1-44.3 9.1 6.9 22.4 11.2 37.2 11.2 0.6 0 1.1 0 1.6-0.1 5.4 26 29.6 98.3 130.6 95.8 0 0 61.5-1.5 90.1 123 0 0 64.1 25.6 81.9-58.8C781.9 266.8 660.1 171 514.9 164.1z"
                fill="#A4BEFF"
                p-id="13226"
              ></path>
              <path
                d="M440.1 358.5a33.2 29 0 1 0 66.4 0 33.2 29 0 1 0-66.4 0Z"
                fill="#83A4FF"
                p-id="13227"
              ></path>
              <path
                d="M536.418053 368.541887a20.7 12.4 36.079 1 0 14.604724-20.043504 20.7 12.4 36.079 1 0-14.604724 20.043504Z"
                fill="#A4BEFF"
                p-id="13228"
              ></path>
            </svg>
          </div>
          <div class="setUpCardItemLeftText">网络VPN</div>
        </div>
        <div class="setUpCardItemRight">
          <div class="setUpCardItemRightIcon">
            <svg
              t="1636259374384"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6835"
              width="12"
              height="12"
            >
              <path
                d="M660.224 512L330.24 183.36a31.936 31.936 0 1 1 44.992-45.248l352.512 350.72 0.64 0.576a31.936 31.936 0 0 1 0 45.184s-0.512 0.32-0.64 0.576l-352.512 350.72a31.936 31.936 0 1 1-44.992-45.248L660.224 512z"
                fill="#888888"
                p-id="6836"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        v-if="disp == 16"
        @click="changeDisp(15)"
        class="fandramCardBouttondropdown"
      >
        <div class="fandramCardBouttondropdownCard">
          <div
            class="fandramCardBouttondropdownCardInfo"
            style="background-color: #94b5e9"
          >
            <div class="DaoHanCardLeftPross"></div>
            <div class="fandramCardBouttondropdownCardText">
              设置代理（根据提示操作）
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="setUpCard">
      <div
        v-show="disp == 17 || der == true"
        @click="changeDisp(18)"
        class="setUpCardItem"
      >
        <div class="setUpCardItemLeft">
          <div class="setUpCardItemLeftIcon">
            <svg
              t="1636260621348"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="14179"
              width="16"
              height="16"
            >
              <path
                d="M682.666667 275.2c130.133333 64 213.333333 196.266667 213.333333 343.466667V648.533333C878.933333 844.8 714.666667 1002.666667 512 1002.666667c-211.2 0-384-172.8-384-384 0-147.2 83.2-279.466667 213.333333-343.466667V106.666667h-21.333333c-23.466667 0-42.666667-19.2-42.666667-42.666667s19.2-42.666667 42.666667-42.666667h384c23.466667 0 42.666667 19.2 42.666667 42.666667s-19.2 42.666667-42.666667 42.666667h-21.333333v168.533333z m72.533333 302.933333c17.066667 6.4 32 12.8 53.333333 17.066667-8.533333-113.066667-78.933333-211.2-185.6-253.866667-17.066667-6.4-25.6-21.333333-25.6-40.533333V106.666667h-170.666666v196.266666c0 17.066667-10.666667 32-25.6 40.533334-93.866667 38.4-160 119.466667-179.2 215.466666 34.133333 4.266667 59.733333 14.933333 81.066666 23.466667 25.6 10.666667 49.066667 19.2 98.133334 19.2s72.533333-8.533333 98.133333-19.2c29.866667-12.8 64-25.6 130.133333-25.6 61.866667-4.266667 96 10.666667 125.866667 21.333333zM512 917.333333c142.933333 0 262.4-102.4 292.266667-236.8-34.133333-4.266667-59.733333-14.933333-81.066667-23.466666-25.6-10.666667-49.066667-19.2-98.133333-19.2s-70.4 8.533333-98.133334 19.2c-29.866667 12.8-64 25.6-130.133333 25.6-66.133333 0-100.266667-12.8-130.133333-25.6-17.066667-6.4-32-12.8-53.333334-17.066667 12.8 155.733333 142.933333 277.333333 298.666667 277.333333z"
                fill="#2F3CF4"
                p-id="14180"
              ></path>
            </svg>
          </div>
          <div class="setUpCardItemLeftText">实验室</div>
        </div>
        <div class="setUpCardItemRight">
          <div class="setUpCardItemRightIcon">
            <svg
              t="1636259374384"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6835"
              width="12"
              height="12"
            >
              <path
                d="M660.224 512L330.24 183.36a31.936 31.936 0 1 1 44.992-45.248l352.512 350.72 0.64 0.576a31.936 31.936 0 0 1 0 45.184s-0.512 0.32-0.64 0.576l-352.512 350.72a31.936 31.936 0 1 1-44.992-45.248L660.224 512z"
                fill="#888888"
                p-id="6836"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        v-if="disp == 18"
        @click="changeDisp(17)"
        class="fandramCardBouttondropdown"
      >
        <div class="fandramCardBouttondropdownCard">
          <div
            class="fandramCardBouttondropdownCardInfo"
            style="background-color: #94b5e9"
          >
            <div class="DaoHanCardLeftPross"></div>
            <div class="fandramCardBouttondropdownCardText">暂无功能</div>
          </div>
        </div>
      </div>
    </div>

    <div class="setUpCard">
      <div
        v-show="disp == 19 || der == true"
        @click="changeDisp(20)"
        class="setUpCardItem"
      >
        <div class="setUpCardItemIcon">
          <svg
            t="1636250530919"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5153"
            width="16"
            height="16"
          >
            <path
              d="M826.88 977.92h-629.76C122.368 977.92 61.44 916.992 61.44 842.24v-660.48C61.44 107.008 122.368 46.08 197.12 46.08h629.76C901.632 46.08 962.56 107.008 962.56 181.76v660.48c0 74.752-60.928 135.68-135.68 135.68zM197.12 148.48c-18.432 0-33.28 14.848-33.28 33.28v660.48c0 18.432 14.848 33.28 33.28 33.28h629.76c18.432 0 33.28-14.848 33.28-33.28v-660.48c0-18.432-14.848-33.28-33.28-33.28h-629.76z"
              fill="#333333"
              p-id="5154"
            ></path>
            <path
              d="M515.072 640c-20.48 0-38.912-12.288-47.104-31.232L353.28 342.016c-11.264-26.112 1.024-56.32 27.136-67.072 26.112-11.264 56.32 1.024 67.072 27.136l66.048 153.6 62.464-153.088c10.752-26.112 40.448-38.912 66.56-28.16 26.112 10.752 38.912 40.448 28.16 66.56l-108.544 266.752c-7.68 19.456-26.112 31.744-47.104 32.256 0.512 0 0 0 0 0zM704 783.36h-384c-16.896 0-30.72-13.824-30.72-30.72s13.824-30.72 30.72-30.72h384c16.896 0 30.72 13.824 30.72 30.72s-13.824 30.72-30.72 30.72z"
              fill="#298FFF"
              p-id="5155"
            ></path>
          </svg>
        </div>
        <div class="setUpCardItemText">版本号</div>
        <div class="setUpCardItemRightCard">
          <span class="setUpCardItemRightCardText">1.0.2</span>
        </div>
      </div>
      <div
        v-if="disp == 20"
        @click="changeDisp(19)"
        class="fandramCardBouttondropdown"
      >
        <div class="fandramCardBouttondropdownCard" @click="pushVersion()">
          <div
            class="fandramCardBouttondropdownCardInfo"
            style="background-color: #94b5e9"
          >
            <div class="DaoHanCardLeftPross"></div>
            <div
              class="fandramCardBouttondropdownCardText"
              style="padding-top: 4px"
            >
              检测更新
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "setUp",
  data() {
    return {
      der: true,
      disp: 1,
      mask: "No",
      speed: 10,
      endId: "",
    };
  },
  
  methods: {
    pushVersion() {
      this.speed = 10;
      //这里做版本判断
      this.$Notify({
        title: "有新的版本！",
      });
      setTimeout(this.updateMondle, 6000);
    },
    specificMondle() {
      if (this.speed == 100) {
        clearInterval(this.endId);
        this.$Loading.finish();
        this.$Message.error("更新失败，服务器未响应");
      } else {
        this.$Loading.update(this.speed);
        this.speed = this.speed + 10;
        //这里执行下载模块
      }
    },
    updateMondle() {
      this.$Message.info("更新下载中");
      this.endId = setInterval(this.specificMondle, 2000);
    },
    open() {
      this.$Message.info("加载中");
      this.$Loading.start();
      setTimeout(this.closeFin, 5000);
    },
    closeFin() {
      this.$Loading.finish();
      this.$Message.error("查看失败");
    },
    changeDisp(e) {
      this.disp = e;
    },
    changeView() {
      this.mask = "Off";
    },
  },
};
</script>

<style>
.DaoHanCardLeftProssNo {
  float: left;
  width: 4px;
  height: 55%;
  /* background-color: #3b4452; */
  border-radius: 5px;
  margin-top: 8px;
  margin-left: 3px;
}
.fandramCardBouttondropdownCardText {
  float: left;
  margin-top: 5px;
  margin-left: 10px;
}
.DaoHanCardLeftPross {
  float: left;
  width: 4px;
  height: 55%;
  background-color: #3b4452;
  border-radius: 5px;
  margin-top: 8px;
  margin-left: 3px;
}
.fandramCardBouttondropdownCardInfo {
  width: 98%;
  height: 35px;
  margin-left: 3px;
  border-radius: 4px;
  box-shadow: none;
  cursor: default;
}
.fandramCardBouttondropdownCardInfo:hover {
  /* background-color: #eaeaea; */
  /* background-color: rgb(204 207 207); */
  background-color: #94b5e9;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-color: rgb(180, 26, 26);
  transition: all 0.2s ease-in-out;
}
.fandramCardBouttondropdownCard {
  width: 100%;
  height: 35px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.fandramCardBouttondropdown {
  width: 100%;
  /* height: 125px; */
  background-color: #e9e9e9;
  border: 1px solid #dadada;
  /* box-shadow: 0 1px 1px 0 rgba(20, 20, 20, 0.15); */
  box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15);
  z-index: 2;
  border-radius: 6px;
  position: absolute;
  top: 0;
  margin-bottom: 5px;
}
.setUpCardItemRightIcon {
  float: right;
  padding-top: 13px;
  padding-right: 8px;
}
.setUpCardItemRight {
  float: right;
  height: 100%;
  width: 40%;
}
.setUpCardItemLeftText {
  float: left;
  height: 100%;
  font-size: 12px;
  padding-top: 8px;
  margin-left: 5px;
}
.setUpCardItemLeftIcon {
  width: 20px;
  height: 100%;
  float: left;
  padding-top: 8px;
}
.setUpCardItemLeft {
  float: left;
  width: 40%;
  height: 100%;
  padding-top: 7px;
  padding-left: 8px;
}
.setUpCardItemRightCardText {
  font-size: 12px;
}
.setUpCardItemRightCard {
  float: right;
  height: 100%;
  padding-top: 13px;
  padding-right: 8px;
}

.setUpCardItemText {
  float: left;
  /* width: 20px; */
  height: 100%;
  font-size: 12px;
  padding-top: 15px;
  padding-left: 15px;
}
.setUpCardItemIcon {
  width: 20px;
  height: 100%;
  float: left;
  padding-top: 15px;
  padding-left: 10px;
}

.setUpCardItem {
  width: 100%;
  height: 45px;
  box-shadow: none;
  border-radius: 6px;
}
.setUpCardItem:hover {
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-color: #eee;
  transition: all 0.2s ease-in-out;
}

.setUpCard {
  width: 96.5%;
  height: 45px;

  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  margin: 5px;
  border-radius: 5px;
  position: relative;
}
#setUp {
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  /* padding-left: 5px; */
  padding-top: 35px;
}
</style>
