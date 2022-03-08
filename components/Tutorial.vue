<!-- Please remove this file from your project -->
<template>
  <div
    class="
      relative
      flex
      items-top
      justify-center
      min-h-screen
      bg-gray-100
      sm:items-center sm:pt-0
    "
  >
    <div id="DIV_1" class="center-align">
      <h1 id="H1_2">SIP Calculator</h1>
      <div id="DIV_3">
        <div id="DIV_4">
          <div id="DIV_5">
            <div id="DIV_7">
              <div id="DIV_9">SIP</div>
              <div id="DIV_9" class="tabActive">Lumpsum</div>
              <div id="DIV_9">StepUp Sip</div>
              <div id="DIV_9">Inflation</div>
              <div id="DIV_9">Deflation</div>
              <div id="DIV_9">CARG</div>
            </div>
          </div>
        </div>
        <div id="DIV_10">
          <div id="DIV_11">
            <div id="DIV_12">
              <div id="DIV_13">
                <div id="DIV_14">Monthly investment</div>
                <div id="DIV_15">
                  <div id="DIV_16"></div>
                  <div id="DIV_17">
                    <span id="SPAN_18"><span id="SPAN_19">₹</span></span>
                    <input
                      id="INPUT_20"
                      type="number"
                      maxlength="250"
                      placeholder="0"
                    />
                  </div>
                  <div id="DIV_21"></div>
                </div>
              </div>
              <div id="DIV_22">
                <div id="DIV_23"></div>
                <div id="DIV_24"></div>
                <div id="DIV_25"></div>
              </div>
            </div>
            <div id="DIV_26">
              <div id="DIV_27">
                <div id="DIV_28">Expected return rate (p.a)</div>
                <div id="DIV_29">
                  <div id="DIV_30"></div>
                  <div id="DIV_31">
                    <input
                      id="INPUT_32"
                      type="number"
                      maxlength="250"
                      placeholder="0"
                    /><span id="SPAN_33">%</span>
                  </div>
                  <div id="DIV_34"></div>
                </div>
              </div>
              <div id="DIV_35">
                <div id="DIV_36"></div>
                <div id="DIV_37"></div>
                <div id="DIV_38"></div>
              </div>
            </div>
            <div id="DIV_39">
              <div id="DIV_40">
                <div id="DIV_41">Time period</div>
                <div id="DIV_42">
                  <div id="DIV_43"></div>
                  <div id="DIV_44">
                    <input
                      id="INPUT_45"
                      type="number"
                      maxlength="250"
                      placeholder="0"
                    /><span id="SPAN_46">Yr</span>
                  </div>
                  <div id="DIV_47"></div>
                </div>
              </div>
              <div id="DIV_48">
                <div id="DIV_49"></div>
                <div id="DIV_50"></div>
                <div id="DIV_51"></div>
              </div>
            </div>
            <div id="DIV_52">
              <div id="DIV_53">
                <div id="DIV_54">Invested amount</div>
                <div id="DIV_55">
                  <span id="SPAN_56">₹<span id="SPAN_57">30,00,000</span></span>
                </div>
              </div>
              <div id="DIV_58">
                <div id="DIV_59">Est. returns</div>
                <div id="DIV_60">
                  <span id="SPAN_61">₹<span id="SPAN_62">28,08,477</span></span>
                </div>
              </div>
              <div id="DIV_63">
                <div id="DIV_64">Total value</div>
                <div id="DIV_65">
                  <span id="SPAN_66">₹<span id="SPAN_67">58,08,477</span></span>
                </div>
              </div>
              <div id="DIV_68">
                <div id="DIV_69">
                  <!-- <div id="DIV_70">
                    <div id="DIV_71">
                      <span id="SPAN_72"
                        ><span id="SPAN_73">INVEST NOW</span></span
                      >
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
          <div id="DIV_74">
            <div id="DIV_75">
              <div id="DIV_76"><span id="SPAN_77"></span>Invested amount</div>
              <div id="DIV_78"><span id="SPAN_79"></span>Est. returns</div>
            </div>
            <div id="DIV_80">
              <svg id="svg_81">
                <g id="g_82">
                  <g id="g_83">
                    <path id="path_84"></path>
                  </g>
                  <g id="g_85">
                    <path id="path_86"></path>
                  </g>
                  <g id="g_87"></g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexComp',
}
</script>

