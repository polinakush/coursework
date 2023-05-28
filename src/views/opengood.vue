<template>
  <div class="opengood-container">
    <div class="opengood-frame">
      <img
        alt="Rectangle14191"
        src="/external/rectangle14191-aii-1200w.png"
        class="opengood-rectangle1"
      />
      <div class="opengood-group">
        <img
          alt="Ellipse4191"
          src="/external/ellipse4191-ijom-200h.png"
          class="opengood-ellipse"
        />
        <img
          alt="Ellipse4191"
          src="/external/ellipse4191-b3je-200h.png"
          class="opengood-ellipse1"
        />
      </div>
      <span class="opengood-text"><span>Банк Бонк</span></span>
      <div class="opengood-frame50">
        <div class="opengood-auto-layout-horizontal">
          <img alt="Frame4191" src="/external/frame4191-en9.svg" />
          <img
            alt="Frame4191"
            src="/external/frame4191-kxb.svg"
            class="opengood-frame2"
          />
          <img alt="Frame4191" src="/external/frame4191-mcaj.svg" />
        </div>
        <div class="opengood-frame49">
          <router-link to="/" class="opengood-text02">
            <span>Все вклады</span>
          </router-link>
          <router-link to="/open" class="opengood-text04">
            <span>Открыть вклад</span>
          </router-link>
          <router-link to="/profile" class="opengood-text06">
            <span>Профиль</span>
          </router-link>
        </div>
      </div>
      <div class="opengood-frame61">
        <div class="opengood-auto-layout-horizontal1">
          <img
            alt="settings4191"
            src="/external/settings4191-byf.svg"
            class="opengood-settings"
          />
          <img
            alt="logout4191"
            src="/external/logout4191-btsf.svg"
            class="opengood-logout"
          />
        </div>
        <div class="opengood-frame491">
          <span class="opengood-text08"><span>Setting</span></span>
          <span class="opengood-text10"><span>Log out</span></span>
        </div>
      </div>
      <img
        alt="Rectangle24191"
        src="/external/rectangle24191-l9l-200w.png"
        class="opengood-rectangle2"
      />
      <span class="opengood-text12"><span>Отдел вкладов</span></span>
      <div class="opengood-frame1"><div class="opengood-group10"></div></div>
      <div class="opengood-frame3">
        <div class="opengood-group1">
          <img
            alt="Intersect4191"
            src="/external/intersect4191-qupd.svg"
            class="opengood-intersect"
          />
          <img
            alt="Intersect4192"
            src="/external/intersect4192-m4xd.svg"
            class="opengood-intersect1"
          />
          <img
            alt="Image4192"
            src="/external/image4192-iy7h-1000w.png"
            class="opengood-image"
          />
          <span class="opengood-text14">
            <span>
              <span>Можно открыть до 20 августа</span>
              <br />
              <span>Нельзя снимать и пополнять</span>
            </span>
          </span>
          <div class="opengood-group11">
            <router-link to="/open" class="opengood-text19">
              <span>К списку вкладов и счетов</span>
            </router-link>
            <img
              alt="arrowbackiosnew4192"
              src="/external/arrowbackiosnew4192-bk4.svg"
              class="opengood-arrowbackiosnew"
            />
          </div>
        </div>
        <div class="opengood-frame40">
          <span class="opengood-text21"><span>Отличный процент</span></span>
        </div>
      </div>
      <img
        alt="formfinalblock4192"
        src="/external/formfinalblock4192-zhuj-500h.png"
        class="opengood-formfinalblock"
      />
      <span class="opengood-text23"><span>Выберете параметры вклада</span></span>
      <img
        alt="Line104193"
        src="/external/line104193-esgm.svg"
        class="opengood-line10"
      />
      <img
        alt="Rectangle194193"
        src="/external/rectangle194193-s6at-200h.png"
        class="opengood-rectangle19"
      />
      <span class="opengood-text25"><span>Сумма</span></span>
      <span class="opengood-text27"><span>Продолжить</span></span>
      <span class="opengood-text29"><span>Срок</span></span>
      <div class="opengood-group13">
        <img
          alt="Line114312"
          src="/external/line114312-67on.svg"
          class="opengood-line11"
        />
        <span class="opengood-text31"><span>RUB</span></span>
        <span class="opengood-text33"><span>100 000</span></span>
      </div>
      <span class="opengood-text35"><span class="opengood-text36">8%</span></span>
      <span class="opengood-text37">
        <span class="opengood-text38">
          8 013,95
          <span v-html="rawknrm"></span>
        </span>
        <span class="opengood-text39"><span v-html="rawqplz"></span></span>
        <span>
          ₽
          <span v-html="raw3w4n"></span>
        </span>
      </span>
      <span class="opengood-text41"><span>Ставка</span></span>
      <span class="opengood-text43"><span>Доход за 1 год</span></span>
      <select class="opengood-select">
        <option value="1" selected>1 год</option>
        <option value="2">2 года</option>
        <option value="3">3 года</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Opengood',
  data() {
    return {
      rawknrm: ' ',
      rawqplz: ' ',
      raw3w4n: ' ',
    }
  },
  metaInfo: {
    title: 'opengood - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'opengood - exported project',
      },
    ],
  },
}
</script>

<style scoped>
.opengood-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.opengood-frame {
  width: 100%;
  height: 900px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 1);
}
.opengood-rectangle1 {
  top: 0px;
  left: 270px;
  width: 1170px;
  height: 900px;
  position: absolute;
}
.opengood-group {
  top: 72px;
  left: 40px;
  width: 36px;
  height: 36px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.opengood-ellipse {
  top: 0px;
  left: 0px;
  width: 36px;
  height: 36px;
  position: absolute;
}
.opengood-ellipse1 {
  top: 8.307723999023438px;
  left: 8.307723999023438px;
  width: 19px;
  height: 19px;
  position: absolute;
}
.opengood-text {
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
.opengood-frame50 {
  gap: 16px;
  top: 178px;
  left: 40px;
  width: 136px;
  display: flex;
  position: absolute;
  align-items: center;
}
.opengood-auto-layout-horizontal {
  gap: 32px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.opengood-frame1 {
  width: 24px;
  height: 24px;
}
.opengood-frame2 {
  width: 24px;
  height: 24px;
}
.opengood-frame3 {
  width: 24px;
  height: 24px;
}
.opengood-frame49 {
  gap: 36px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.opengood-text02 {
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
.opengood-text04 {
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
.opengood-text06 {
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
.opengood-frame61 {
  gap: 16px;
  top: 733px;
  left: 40px;
  width: 85px;
  display: flex;
  position: absolute;
  align-items: center;
}
.opengood-auto-layout-horizontal1 {
  gap: 32px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.opengood-settings {
  width: 24px;
  height: 24px;
}
.opengood-logout {
  width: 24px;
  height: 24px;
}
.opengood-frame491 {
  gap: 41px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.opengood-text08 {
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
.opengood-text10 {
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
.opengood-rectangle2 {
  top: 234px;
  left: 5px;
  width: 8px;
  height: 28px;
  position: absolute;
  border-radius: 0 4px 4px 0;
}
.opengood-text12 {
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
.opengood-frame1 {
  gap: 24px;
  top: 173px;
  left: 390px;
  width: 930px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.opengood-group10 {
  width: 0px;
  height: 0px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 1;
}
.opengood-frame3 {
  top: 80px;
  left: 390px;
  width: 930px;
  height: 189px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 20px;
  background-image: linear-gradient(-73deg, rgba(18, 201, 62, 0.1899999976158142) 0%, rgba(162, 226, 69, 0.9100000262260437) 93%, rgba(173, 228, 70, 0.05999999865889549) 100%);
}
.opengood-group1 {
  top: -1px;
  left: -215.10203552246094px;
  width: 1145.10205078125px;
  height: 192px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.opengood-intersect {
  top: 0px;
  left: 37.95917510986328px;
  width: 879px;
  height: 191px;
  position: absolute;
}
.opengood-intersect1 {
  top: 0px;
  left: 0px;
  width: 813px;
  height: 191px;
  position: absolute;
}
.opengood-image {
  top: 1px;
  left: 215.10203552246094px;
  width: 930px;
  height: 191px;
  position: absolute;
}
.opengood-text14 {
  top: 96px;
  left: 264.10205078125px;
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
.opengood-group11 {
  top: 18px;
  left: 264.10205078125px;
  width: 204px;
  height: 20px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.opengood-text19 {
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
.opengood-arrowbackiosnew {
  top: 4px;
  left: 0px;
  width: 10px;
  height: 12px;
  position: absolute;
}
.opengood-frame40 {
  top: 49px;
  left: 49px;
  width: 276px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
}
.opengood-text21 {
  color: var(--dl-color-default-primary);
  height: auto;
  font-size: 27px;
  font-style: SemiBold;
  text-align: left;
  font-family: Poppins;
  font-weight: 600;
  line-height: 125%;
  font-stretch: normal;
  text-decoration: none;
}
.opengood-formfinalblock {
  top: 376px;
  left: 390px;
  width: 930px;
  height: 434px;
  position: absolute;
  border-radius: 35px;
}
.opengood-text23 {
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
.opengood-line10 {
  top: 442px;
  left: 1021px;
  width: 300px;
  height: 1px;
  position: absolute;
}
.opengood-rectangle19 {
  top: 694px;
  left: 439px;
  width: 220px;
  height: 53px;
  position: absolute;
}
.opengood-text25 {
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
.opengood-text27 {
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
.opengood-text29 {
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
.opengood-group13 {
  top: 472px;
  left: 439px;
  width: 420px;
  height: 53px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.opengood-line11 {
  top: 12px;
  left: 341px;
  width: 30px;
  height: 1px;
  position: absolute;
}
.opengood-text31 {
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
.opengood-text33 {
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
.opengood-text35 {
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
.opengood-text36 {
  font-weight: 600;
}
.opengood-text37 {
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
.opengood-text38 {
  font-weight: 600;
}
.opengood-text39 {
  font-weight: 400;
}
.opengood-text41 {
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
.opengood-text43 {
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
.opengood-select {
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
