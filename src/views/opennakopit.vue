<template>
  <div class="opennakopit-container">
    <div class="opennakopit-frame">
      <img
        alt="Rectangle14365"
        src="/external/rectangle14365-t5r1-1200w.png"
        class="opennakopit-rectangle1"
      />
      <div class="opennakopit-group">
        <img
          alt="Ellipse4365"
          src="/external/ellipse4365-4s1l-200h.png"
          class="opennakopit-ellipse"
        />
        <img
          alt="Ellipse4366"
          src="/external/ellipse4366-l4vh-200h.png"
          class="opennakopit-ellipse1"
        />
      </div>
      <span class="opennakopit-text"><span>Банк Бонк</span></span>
      <div class="opennakopit-frame50">
        <div class="opennakopit-auto-layout-horizontal">
          <img alt="Frame4366" src="/external/frame4366-gucu.svg" />
          <img
            alt="Frame4366"
            src="/external/frame4366-jgak.svg"
            class="opennakopit-frame2"
          />
          <img alt="Frame4366" src="/external/frame4366-7uj.svg" />
        </div>
        <div class="opennakopit-frame49">
          <router-link to="/" class="opennakopit-text02">
            <span>Все вклады</span>
          </router-link>
          <router-link to="/open" class="opennakopit-text04">
            <span>Открыть вклад</span>
          </router-link>
          <router-link to="/profile" class="opennakopit-text06">
            <span>Профиль</span>
          </router-link>
        </div>
      </div>
      <div class="opennakopit-frame61">
        <div class="opennakopit-auto-layout-horizontal1">
          <img
            alt="settings4367"
            src="/external/settings4367-8pv4.svg"
            class="opennakopit-settings"
          />
          <img
            alt="logout4367"
            src="/external/logout4367-4le.svg"
            class="opennakopit-logout"
          />
        </div>
        <div class="opennakopit-frame491">
          <span class="opennakopit-text08"><span>Setting</span></span>
          <span class="opennakopit-text10"><span>Log out</span></span>
        </div>
      </div>
      <img
        alt="Rectangle24368"
        src="/external/rectangle24368-8aqs-200w.png"
        class="opennakopit-rectangle2"
      />
      <span class="opennakopit-text12"><span>Отдел вкладов</span></span>
      <div class="opennakopit-frame1">
        <div class="opennakopit-group10"></div>
      </div>
      <div class="opennakopit-frame3">
        <div class="opennakopit-group1">
          <img
            alt="Intersect4431"
            src="/external/intersect4431-cspp.svg"
            class="opennakopit-intersect"
          />
          <img
            alt="Intersect4431"
            src="/external/intersect4431-uslj.svg"
            class="opennakopit-intersect1"
          />
          <img
            alt="Image4431"
            src="/external/image4431-ryl-1000w.png"
            class="opennakopit-image"
          />
          <span class="opennakopit-text14">
            <span>
              <span>С пополнением</span>
              <br />
              <span>Со снятием</span>
            </span>
          </span>
          <div class="opennakopit-group11">
            <router-link to="/open" class="opennakopit-text19">
              <span>К списку вкладов и счетов</span>
            </router-link>
            <img
              alt="arrowbackiosnew4432"
              src="/external/arrowbackiosnew4432-jo8m.svg"
              class="opennakopit-arrowbackiosnew"
            />
          </div>
          <span class="opennakopit-text21"><span>Накопительный счет</span></span>
        </div>
      </div>
      <img
        alt="formfinalblock4361"
        src="/external/formfinalblock4361-nrvm-500h.png"
        class="opennakopit-formfinalblock"
      />
      <span class="opennakopit-text23">
        <span>Выберете параметры вклада</span>
      </span>
      <img
        alt="Line104361"
        src="/external/line104361-lftb.svg"
        class="opennakopit-line10"
      />
      <img
        alt="Rectangle194361"
        src="/external/rectangle194361-q7fn-200h.png"
        class="opennakopit-rectangle19"
      />
      <span class="opennakopit-text25"><span>Сумма</span></span>
      <span class="opennakopit-text27"><span>Продолжить</span></span>
      <span class="opennakopit-text29"><span>Срок</span></span>
      <div class="opennakopit-group13">
        <img
          alt="Line114361"
          src="/external/line114361-zbra.svg"
          class="opennakopit-line11"
        />
        <span class="opennakopit-text31"><span>RUB</span></span>
        <span class="opennakopit-text33"><span>100 000</span></span>
      </div>
      <span class="opennakopit-text35">
        <span class="opennakopit-text36">5,8%</span>
      </span>
      <span class="opennakopit-text37">
        <span class="opennakopit-text38">
          5 809
          <span v-html="rawdajn"></span>
        </span>
        <span class="opennakopit-text39"><span v-html="rawpjut"></span></span>
        <span>
          ₽
          <span v-html="rawft3s"></span>
        </span>
      </span>
      <span class="opennakopit-text41"><span>Ставка</span></span>
      <span class="opennakopit-text43"><span>Доход за 1 год</span></span>
      <select class="opennakopit-select">
        <option value="1" selected>1 год</option>
        <option value="2">2 года</option>
        <option value="3">3 года</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Opennakopit',
  data() {
    return {
      rawdajn: ' ',
      rawpjut: ' ',
      rawft3s: ' ',
    }
  },
  metaInfo: {
    title: 'opennakopit - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'opennakopit - exported project',
      },
    ],
  },
}
</script>

<style scoped>
.opennakopit-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.opennakopit-frame {
  width: 100%;
  height: 900px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 1);
}
.opennakopit-rectangle1 {
  top: 0px;
  left: 270px;
  width: 1170px;
  height: 900px;
  position: absolute;
}
.opennakopit-group {
  top: 72px;
  left: 40px;
  width: 36px;
  height: 36px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.opennakopit-ellipse {
  top: 0px;
  left: 0px;
  width: 36px;
  height: 36px;
  position: absolute;
}
.opennakopit-ellipse1 {
  top: 8.307723999023438px;
  left: 8.307723999023438px;
  width: 19px;
  height: 19px;
  position: absolute;
}
.opennakopit-text {
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
.opennakopit-frame50 {
  gap: 16px;
  top: 178px;
  left: 40px;
  width: 136px;
  display: flex;
  position: absolute;
  align-items: center;
}
.opennakopit-auto-layout-horizontal {
  gap: 32px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.opennakopit-frame1 {
  width: 24px;
  height: 24px;
}
.opennakopit-frame2 {
  width: 24px;
  height: 24px;
}
.opennakopit-frame3 {
  width: 24px;
  height: 24px;
}
.opennakopit-frame49 {
  gap: 36px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.opennakopit-text02 {
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
.opennakopit-text04 {
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
.opennakopit-text06 {
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
.opennakopit-frame61 {
  gap: 16px;
  top: 733px;
  left: 40px;
  width: 85px;
  display: flex;
  position: absolute;
  align-items: center;
}
.opennakopit-auto-layout-horizontal1 {
  gap: 32px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.opennakopit-settings {
  width: 24px;
  height: 24px;
}
.opennakopit-logout {
  width: 24px;
  height: 24px;
}
.opennakopit-frame491 {
  gap: 41px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.opennakopit-text08 {
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
.opennakopit-text10 {
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
.opennakopit-rectangle2 {
  top: 234px;
  left: 5px;
  width: 8px;
  height: 28px;
  position: absolute;
  border-radius: 0 4px 4px 0;
}
.opennakopit-text12 {
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
.opennakopit-frame1 {
  gap: 24px;
  top: 173px;
  left: 390px;
  width: 930px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.opennakopit-group10 {
  width: 0px;
  height: 0px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 1;
}
.opennakopit-frame3 {
  top: 81px;
  left: 390px;
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
.opennakopit-group1 {
  top: -1px;
  left: -215.10203552246094px;
  width: 1145.10205078125px;
  height: 192px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.opennakopit-intersect {
  top: 0px;
  left: 37.95917510986328px;
  width: 879px;
  height: 191px;
  position: absolute;
}
.opennakopit-intersect1 {
  top: 0px;
  left: 0px;
  width: 813px;
  height: 191px;
  position: absolute;
}
.opennakopit-image {
  right: 0px;
  width: 930px;
  bottom: 0px;
  height: 191px;
  position: absolute;
}
.opennakopit-text14 {
  top: 102px;
  left: 268.10205078125px;
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
.opennakopit-group11 {
  top: 24px;
  left: 268.10205078125px;
  width: 204px;
  height: 20px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.opennakopit-text19 {
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
.opennakopit-arrowbackiosnew {
  top: 4px;
  left: 0px;
  width: 10px;
  height: 12px;
  position: absolute;
}
.opennakopit-text21 {
  top: 56px;
  left: 268.10205078125px;
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
.opennakopit-formfinalblock {
  top: 376px;
  left: 390px;
  width: 930px;
  height: 434px;
  position: absolute;
  border-radius: 35px;
}
.opennakopit-text23 {
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
.opennakopit-line10 {
  top: 442px;
  left: 1021px;
  width: 300px;
  height: 1px;
  position: absolute;
}
.opennakopit-rectangle19 {
  top: 694px;
  left: 439px;
  width: 220px;
  height: 53px;
  position: absolute;
}
.opennakopit-text25 {
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
.opennakopit-text27 {
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
.opennakopit-text29 {
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
.opennakopit-group13 {
  top: 472px;
  left: 439px;
  width: 420px;
  height: 53px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.opennakopit-line11 {
  top: 12px;
  left: 341px;
  width: 30px;
  height: 1px;
  position: absolute;
}
.opennakopit-text31 {
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
.opennakopit-text33 {
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
.opennakopit-text35 {
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
.opennakopit-text36 {
  font-weight: 600;
}
.opennakopit-text37 {
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
.opennakopit-text38 {
  font-weight: 600;
}
.opennakopit-text39 {
  font-weight: 400;
}
.opennakopit-text41 {
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
.opennakopit-text43 {
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
.opennakopit-select {
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
