<template>
  <div class="openyan-container">
    <div class="openyan-frame">
      <img
        alt="Rectangle14432"
        src="/external/rectangle14432-v4es-1200w.png"
        class="openyan-rectangle1"
      />
      <div class="openyan-group">
        <img
          alt="Ellipse4432"
          src="/external/ellipse4432-cdfd-200h.png"
          class="openyan-ellipse"
        />
        <img
          alt="Ellipse4432"
          src="/external/ellipse4432-2rtf-200h.png"
          class="openyan-ellipse1"
        />
      </div>
      <span class="openyan-text"><span>Банк Бонк</span></span>
      <div class="openyan-frame50">
        <div class="openyan-auto-layout-horizontal">
          <img alt="Frame4432" src="/external/frame4432-dybg.svg" />
          <img
            alt="Frame4432"
            src="/external/frame4432-k43i.svg"
            class="openyan-frame2"
          />
          <img alt="Frame4432" src="/external/frame4432-8vx2.svg" />
        </div>
        <div class="openyan-frame49">
          <router-link to="/" class="openyan-text02">
            <span>Все вклады</span>
          </router-link>
          <router-link to="/open" class="openyan-text04">
            <span>Открыть вклад</span>
          </router-link>
          <router-link to="/profile" class="openyan-text06">
            <span>Профиль</span>
          </router-link>
        </div>
      </div>
      <div class="openyan-frame61">
        <div class="openyan-auto-layout-horizontal1">
          <img
            alt="settings4432"
            src="/external/settings4432-ofkj.svg"
            class="openyan-settings"
          />
          <img
            alt="logout4432"
            src="/external/logout4432-r59v.svg"
            class="openyan-logout"
          />
        </div>
        <div class="openyan-frame491">
          <span class="openyan-text08"><span>Setting</span></span>
          <span class="openyan-text10"><span>Log out</span></span>
        </div>
      </div>
      <img
        alt="Rectangle24432"
        src="/external/rectangle24432-w9cm-200w.png"
        class="openyan-rectangle2"
      />
      <span class="openyan-text12"><span>Отдел вкладов</span></span>
      <img
        alt="formfinalblock4432"
        src="/external/formfinalblock4432-60i-500h.png"
        class="openyan-formfinalblock"
      />
      <span class="openyan-text14"><span>Выберете параметры вклада</span></span>
      <img
        alt="Line104432"
        src="/external/line104432-al8.svg"
        class="openyan-line10"
      />
      <img
        alt="Rectangle194432"
        src="/external/rectangle194432-zpx-200h.png"
        class="openyan-rectangle19"
      />
      <span class="openyan-text16"><span>Сумма</span></span>
      <span class="openyan-text18"><span>Продолжить</span></span>
      <span class="openyan-text20"><span>Срок</span></span>
      <div class="openyan-group13">
        <div class="openyan-rectangle18">
          <span class="openyan-text22"><span>10 000</span></span>
          <span class="openyan-text24"><span>CNY</span></span>
        </div>
      </div>
      <span class="openyan-text26">
        <span class="openyan-text27">2,92%</span>
      </span>
      <span class="openyan-text28">
        <span class="openyan-text29">
          875,25
          <span v-html="rawu9ue"></span>
        </span>
        <span class="openyan-text30"><span v-html="rawm3io"></span></span>
        <span>
          ¥
          <span v-html="raw55u4"></span>
        </span>
      </span>
      <span class="openyan-text32"><span>Ставка</span></span>
      <span class="openyan-text34"><span>Доход за 3 года</span></span>
      <div class="openyan-frame3">
        <div class="openyan-group1">
          <div class="openyan-frame1">
            <div class="openyan-group2">
              <img
                alt="Intersect4433"
                src="/external/intersect4433-xfp.svg"
                class="openyan-intersect"
              />
              <img
                alt="Intersect4433"
                src="/external/intersect4433-bd3e.svg"
                class="openyan-intersect1"
              />
              <img
                alt="Image4433"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/07e0f3c5-14ba-4800-baab-5e2f5b87adea/e7ea7599-ae88-459d-a15d-6e11697c6690?org_if_sml=1109495"
                class="openyan-image"
              />
            </div>
          </div>
          <span class="openyan-text36">
            <span>Нельзя снимать пополнять</span>
          </span>
          <div class="openyan-group11">
            <router-link to="/open" class="openyan-text38">
              <span>К списку вкладов и счетов</span>
            </router-link>
            <img
              alt="arrowbackiosnew4432"
              src="/external/arrowbackiosnew4432-vfz.svg"
              class="openyan-arrowbackiosnew"
            />
          </div>
          <span class="openyan-text40"><span>Вклад в юанях</span></span>
        </div>
      </div>
      <select class="openyan-select">
        <option value="Option 1">Option 1</option>
        <option value="3">3 года</option>
        <option value="Option 2">Option 2</option>
        <option value="2">2 года</option>
        <option value="1">1 год</option>
        <option value="Option 3">Option 3</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Openyan',
  data() {
    return {
      rawu9ue: ' ',
      rawm3io: ' ',
      raw55u4: ' ',
    }
  },
  metaInfo: {
    title: 'openyan - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'openyan - exported project',
      },
    ],
  },
}
</script>

<style scoped>
.openyan-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.openyan-frame {
  width: 100%;
  height: 900px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
  background-color: rgba(255, 255, 255, 1);
}
.openyan-rectangle1 {
  top: 0px;
  left: 270px;
  width: 1170px;
  height: 900px;
  position: absolute;
}
.openyan-group {
  top: 72px;
  left: 40px;
  width: 36px;
  height: 36px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.openyan-ellipse {
  top: 0px;
  left: 0px;
  width: 36px;
  height: 36px;
  position: absolute;
}
.openyan-ellipse1 {
  top: 8.307723999023438px;
  left: 8.307723999023438px;
  width: 19px;
  height: 19px;
  position: absolute;
}
.openyan-text {
  top: 64px;
  left: 81px;
  color: var(--dl-color-default-primary);
  height: auto;
  position: absolute;
  font-size: 21px;
  font-style: Medium;
  text-align: left;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 150%;
  font-stretch: normal;
  text-decoration: none;
}
.openyan-frame50 {
  gap: 16px;
  top: 178px;
  left: 40px;
  width: 136px;
  display: flex;
  position: absolute;
  align-items: center;
}
.openyan-auto-layout-horizontal {
  gap: 32px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.openyan-frame1 {
  width: 24px;
  height: 24px;
}
.openyan-frame2 {
  width: 24px;
  height: 24px;
}
.openyan-frame3 {
  width: 24px;
  height: 24px;
}
.openyan-frame49 {
  gap: 36px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.openyan-text02 {
  color: rgba(152, 152, 152, 1);
  height: auto;
  font-size: 12px;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  line-height: 125%;
  font-stretch: normal;
  text-decoration: none;
}
.openyan-text04 {
  color: rgba(29, 32, 39, 1);
  height: auto;
  font-size: 12px;
  font-style: Bold;
  text-align: left;
  font-family: Poppins;
  font-weight: 700;
  line-height: 125%;
  font-stretch: normal;
  text-decoration: none;
}
.openyan-text06 {
  color: var(--dl-color-default-text2);
  height: auto;
  font-size: 12px;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  line-height: 125%;
  font-stretch: normal;
  text-decoration: none;
}
.openyan-frame61 {
  gap: 16px;
  top: 733px;
  left: 40px;
  width: 85px;
  display: flex;
  position: absolute;
  align-items: center;
}
.openyan-auto-layout-horizontal1 {
  gap: 32px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.openyan-settings {
  width: 24px;
  height: 24px;
}
.openyan-logout {
  width: 24px;
  height: 24px;
}
.openyan-frame491 {
  gap: 41px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.openyan-text08 {
  color: var(--dl-color-default-text2);
  height: auto;
  font-size: 12px;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  line-height: 125%;
  font-stretch: normal;
  text-decoration: none;
}
.openyan-text10 {
  color: var(--dl-color-default-text2);
  height: auto;
  font-size: 12px;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  line-height: 125%;
  font-stretch: normal;
  text-decoration: none;
}
.openyan-rectangle2 {
  top: 234px;
  left: 5px;
  width: 8px;
  height: 28px;
  position: absolute;
  border-radius: 0 4px 4px 0;
}
.openyan-text12 {
  top: 93px;
  left: 80px;
  color: var(--dl-color-default-primary);
  height: auto;
  position: absolute;
  font-size: 15px;
  font-style: Medium;
  text-align: left;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 150%;
  font-stretch: normal;
  text-decoration: none;
}
.openyan-formfinalblock {
  top: 376px;
  left: 390px;
  width: 930px;
  height: 434px;
  position: absolute;
  border-radius: 35px;
}
.openyan-text14 {
  top: 322px;
  left: 442px;
  color: var(--dl-color-default-primary);
  height: auto;
  position: absolute;
  font-size: 27px;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  line-height: 125%;
  font-stretch: normal;
  text-decoration: none;
}
.openyan-line10 {
  top: 442px;
  left: 1021px;
  width: 300px;
  height: 1px;
  position: absolute;
}
.openyan-rectangle19 {
  top: 694px;
  left: 439px;
  width: 220px;
  height: 53px;
  position: absolute;
}
.openyan-text16 {
  top: 443px;
  left: 439px;
  color: rgba(152, 152, 152, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  line-height: 125%;
  font-stretch: normal;
  text-decoration: none;
}
.openyan-text18 {
  top: 708px;
  left: 482px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 20px;
  font-style: SemiBold;
  text-align: left;
  font-family: Poppins;
  font-weight: 600;
  line-height: 125%;
  font-stretch: normal;
  text-decoration: none;
}
.openyan-text20 {
  top: 563px;
  left: 439px;
  color: rgba(152, 152, 152, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  line-height: 125%;
  font-stretch: normal;
  text-decoration: none;
}
.openyan-group13 {
  top: 472px;
  left: 439px;
  width: 420px;
  height: 53px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.openyan-rectangle18 {
  width: 420px;
  height: 53px;
  display: flex;
  border-color: rgba(204, 204, 204, 1);
  border-style: solid;
  border-width: 1px;
  padding-left: 89px;
  background-size: cover;
  background-image: url("/external/rectangle184432-5zc-500w.png");
  background-position: center;
}
.openyan-text22 {
  top: 12px;
  left: 23px;
  color: var(--dl-color-default-primary);
  height: auto;
  position: absolute;
  font-size: 20px;
  font-style: Medium;
  text-align: left;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 150%;
  font-stretch: normal;
  text-decoration: none;
}
.openyan-text24 {
  top: 16px;
  left: 364px;
  color: rgba(152, 152, 152, 1);
  height: auto;
  position: absolute;
  font-size: 17px;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  line-height: 125%;
  font-stretch: normal;
  text-decoration: none;
}
.openyan-text26 {
  top: 487px;
  left: 1066px;
  color: var(--dl-color-default-primary);
  height: auto;
  position: absolute;
  font-size: 32px;
  font-style: SemiBold;
  text-align: left;
  font-family: Montserrat;
  font-weight: 600;
  line-height: 150%;
  font-stretch: normal;
  text-decoration: none;
}
.openyan-text27 {
  font-weight: 600;
}
.openyan-text28 {
  top: 611px;
  left: 1066px;
  color: var(--dl-color-default-primary);
  height: auto;
  position: absolute;
  font-size: 32px;
  font-style: SemiBold;
  text-align: left;
  font-family: Montserrat;
  font-weight: 600;
  line-height: 150%;
  font-stretch: normal;
  text-decoration: none;
}
.openyan-text29 {
  font-weight: 600;
}
.openyan-text30 {
  font-weight: 400;
}
.openyan-text32 {
  top: 535px;
  left: 1066px;
  color: rgba(29, 32, 39, 1);
  height: auto;
  position: absolute;
  font-size: 15px;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  line-height: 125%;
  font-stretch: normal;
  text-decoration: none;
}
.openyan-text34 {
  top: 659px;
  left: 1066px;
  color: rgba(29, 32, 39, 1);
  height: auto;
  position: absolute;
  font-size: 15px;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  line-height: 125%;
  font-stretch: normal;
  text-decoration: none;
}
.openyan-frame3 {
  top: 81px;
  left: 391px;
  width: 930px;
  height: 189px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 20px;
  background-image: linear-gradient(-61deg, rgba(194, 233, 242, 1) 0%, rgba(206, 239, 246, 1) 100%);
}
.openyan-group1 {
  top: 0px;
  left: 0.000030517578125px;
  width: 930px;
  height: 189px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.openyan-frame1 {
  top: 0px;
  left: 0px;
  width: 930px;
  height: 189px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 20px;
  background-image: linear-gradient(-71deg, rgba(31, 29, 29, 0.25) 0%, rgba(235, 175, 186, 1) 0%, rgba(221, 255, 159, 1) 100%, rgba(239, 241, 216, 1) 100%);
}
.openyan-group2 {
  top: -1px;
  left: -215.10203552246094px;
  width: 1145.10205078125px;
  height: 192px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.openyan-intersect {
  top: 1.1368683772161603e-13px;
  left: 37.95917510986328px;
  width: 879px;
  height: 191px;
  position: absolute;
}
.openyan-intersect1 {
  top: 0px;
  left: 0px;
  width: 813px;
  height: 191px;
  position: absolute;
}
.openyan-image {
  top: -6px;
  right: 11px;
  width: 930px;
  height: 191px;
  position: absolute;
}
.openyan-text36 {
  top: 118px;
  left: 53px;
  color: var(--dl-color-default-primary);
  width: 266px;
  height: auto;
  position: absolute;
  font-size: 16px;
  font-style: Medium;
  text-align: left;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 150%;
  font-stretch: normal;
  text-decoration: none;
}
.openyan-group11 {
  top: 23px;
  left: 53px;
  width: 204px;
  height: 20px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.openyan-text38 {
  left: 15px;
  color: rgba(29, 32, 39, 0.6399999856948853);
  width: 189px;
  height: auto;
  position: absolute;
  font-size: 13px;
  font-style: Regular;
  text-align: left;
  font-family: Poppins;
  font-weight: 400;
  line-height: 150%;
  font-stretch: normal;
  text-decoration: none;
}
.openyan-arrowbackiosnew {
  top: 4px;
  left: 0px;
  width: 10px;
  height: 12px;
  position: absolute;
}
.openyan-text40 {
  top: 55px;
  left: 53px;
  color: var(--dl-color-default-primary);
  height: auto;
  position: absolute;
  font-size: 27px;
  font-style: SemiBold;
  text-align: left;
  font-family: Poppins;
  font-weight: 600;
  line-height: 125%;
  font-stretch: normal;
  text-decoration: none;
}
.openyan-select {
  top: 594px;
  left: 440px;
  width: 420px;
  height: 53px;
  position: absolute;
  border-color: #cccccc;
  border-width: 1px;
  padding-right: 4px;
}
</style>
