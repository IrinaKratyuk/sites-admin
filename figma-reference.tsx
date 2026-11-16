const assetPathPrefix = "https://www.figma.com/api/mcp/asset/361b46ec-20f7-416c-be8f-dd9c0be19278";
const imgCursorArrow = `${assetPathPrefix}/9dbec.svg`;
const imgFrame = `${assetPathPrefix}/cecd5.svg`;
const imgCheckbox = `${assetPathPrefix}/11596.svg`;
const imgCheckbox1 = `${assetPathPrefix}/c45b1.svg`;
const imgStyleTextVisibleFalse = `${assetPathPrefix}/4ce41.svg`;
const imgStyleTextVisibleTrue = `${assetPathPrefix}/b8004.svg`;
const imgWrap = `${assetPathPrefix}/14005.svg`;
const imgProperty1Default = `${assetPathPrefix}/d1f63.svg`;
const imgArrowCutForward1 = `${assetPathPrefix}/b84ab.svg`;

function CursorArrow({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="300:16812" data-name="Cursor/Arrow">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCursorArrow} />
    </div>
  );
}

type HelpButtonProps = {
  className?: string;
  hover?: "False";
};

function HelpButton({ className, hover = "False" }: HelpButtonProps) {
  return (
    <div className={className || "bg-[var(--background\\/same\\/info_same_background-color,#eeebff)] border border-[var(--background\\/same\\/info_active_same_background-color,#d4ccff)] border-solid content-stretch flex items-center justify-center relative rounded-[16px] size-[32px]"} data-node-id="3:51262">
      <div className="h-[16px] relative shrink-0 w-[12px]" data-node-id="3:51263" data-name="Frame">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
      </div>
    </div>
  );
}

type SystemButtonProps = {
  className?: string;
  buttonType?: "userStatus";
  hover?: boolean;
  propValue?: string;
};

function SystemButton({ className, buttonType = "userStatus", hover = false, propValue = "КВ" }: SystemButtonProps) {
  return (
    <div className={className || "content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[16px] size-[32px]"} data-node-id="3:60285">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8991a9] text-[14px] tracking-[-0.1974px] whitespace-nowrap" data-node-id="3:60286">
        {propValue}
      </p>
      <div className="absolute bottom-[8px] left-[4px] size-[7px]" data-node-id="3:60287" data-name="_status">
        <div className="absolute bg-[#f47843] border border-solid border-white left-[0.5px] rounded-[3px] size-[6px] top-[0.5px]" data-node-id="I3:60287;7735:24686" data-name="Статус" />
      </div>
    </div>
  );
}

type CheckboxSizeProps = {
  className?: string;
  size?: "s";
};

function CheckboxSize({ className, size = "s" }: CheckboxSizeProps) {
  return (
    <div className={className || "content-stretch flex h-[var(--components\\/toggle\\/checkbox\\/height_checkbox,24px)] items-end min-w-[20px] pb-[6px] pl-[var(--offset\\/offset_2xs,4px)] pr-[var(--components\\/toggle\\/checkbox\\/padding-vertical_checkbox,3px)] relative"} data-node-id="39:22739">
      <div className="relative shrink-0 size-[13px]" data-node-id="39:22742" data-name="_checkbox">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheckbox} />
      </div>
    </div>
  );
}

type CheckboxProps = {
  className?: string;
  hover?: boolean;
  readOnly?: "false";
  resetValue?: "false";
  triState?: "false";
  value?: "false";
  viewMode?: "outlined";
};

function Checkbox({ className, hover = false, readOnly = "false", resetValue = "false", triState = "false", value = "false", viewMode = "outlined" }: CheckboxProps) {
  const isHover = hover;
  return (
    <div className={className || "content-stretch flex items-start relative"} id={isHover ? "node-39_22781" : "node-39_22778"}>
      {!hover && <CheckboxSize className="content-stretch flex h-[24px] items-end min-w-[20px] pb-[6px] pl-[var(--offset\/offset_2xs,4px)] pr-[var(--components\/toggle\/checkbox\/padding-vertical_checkbox,3px)] relative shrink-0" />}
      {isHover && (
        <div className="content-stretch flex h-[24px] items-end min-w-[20px] pb-[6px] pl-[var(--offset\/offset_2xs,4px)] pr-[var(--components\/toggle\/checkbox\/padding-vertical_checkbox,3px)] relative shrink-0" data-node-id="39:22808" data-name="_checkbox__size">
          <div className="relative shrink-0 size-[13px]" data-node-id="I39:22808;14613:12405" data-name="_checkbox">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheckbox1} />
          </div>
        </div>
      )}
    </div>
  );
}

type Checkbox1Props = {
  className?: string;
  caption?: string;
  captionPosition?: "end";
  captionTemplate?: "text";
  captionVisible?: boolean;
  hover?: boolean;
  readOnly?: "false";
  resetValue?: "false";
  triState?: "false";
  value?: "false";
  viewMode?: "outlined";
};

function Checkbox1({ className, caption = "Содержание", captionPosition = "end", captionTemplate = "text", captionVisible = true, hover = false, readOnly = "false", resetValue = "false", triState = "false", value = "false", viewMode = "outlined" }: Checkbox1Props) {
  return (
    <div className={className || "content-stretch flex items-start relative"} data-node-id="39:22846">
      <Checkbox className="content-stretch flex items-start relative shrink-0" />
      {captionVisible && (
        <div className="content-stretch flex items-start py-[var(--offset\/offset_3xs,2px)] relative shrink-0" data-node-id="39:22955" data-name="checkboxContent">
          <p className="[word-break:break-word] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] leading-[normal] not-italic overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/text-color,black)] text-ellipsis tracking-[-0.1974px] whitespace-nowrap" data-node-id="39:22956">
            {caption}
          </p>
        </div>
      )}
    </div>
  );
}

type TabsHorizontalProps = {
  className?: string;
  accented?: "true";
  hover?: "False";
  itemRightTemplate?: boolean;
  selected?: boolean;
  showCounter?: boolean;
  showIcon?: boolean;
  showImage?: boolean;
  showMore?: boolean;
  textTemplate?: string;
  view?: "Text";
};

function TabsHorizontal({ className, accented = "true", hover = "False", itemRightTemplate = false, selected = true, showCounter = false, showIcon = true, showImage = true, showMore = false, textTemplate = "Вкладка", view = "Text" }: TabsHorizontalProps) {
  const isNotSelectedAndFalse = !selected && hover === "False";
  const isSelectedAndFalse = selected && hover === "False";
  return (
    <div className={className || "content-stretch flex gap-[12px] items-start px-[12px] relative"} id={isNotSelectedAndFalse ? "node-3_51244" : "node-3_51227"}>
      <div className="content-stretch flex gap-[6px] items-start relative shrink-0" id={isNotSelectedAndFalse ? "node-3_51245" : "node-3_51228"} data-name="template">
        <div className="content-stretch flex flex-col h-[32px] items-start justify-center relative shrink-0" id={isNotSelectedAndFalse ? "node-3_51246" : "node-3_51229"} data-name="Контент с маркером">
          <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px pt-[3px] relative w-full" id={isNotSelectedAndFalse ? "node-3_51247" : "node-3_51230"} data-name="Контент внутри справа">
            {showIcon && (
              <div className="content-stretch flex h-full items-center pb-[3px] relative shrink-0" data-node-id="3:51231" data-name="icon">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="3:51232" data-name="_Иконка">
                  <div className="[word-break:break-word] flex flex-col font-['cbuc-icons:Regular'] justify-center leading-[0] not-italic relative shrink-0 size-[16px] text-[16px] text-[color:var(--icon\/label_icon-color,#8991a9)]" data-node-id="I3:51232;646:2357">
                    <p className="leading-[normal]">{`\uE65D`}</p>
                  </div>
                </div>
              </div>
            )}
            {showImage && (
              <div className="content-stretch flex h-full items-center pb-px relative shrink-0" data-node-id="3:51233" data-name="photo">
                <div className="bg-[var(--background\/contrast\/unaccented_contrast_background-color,#dbdbdb)] relative rounded-[4px] shrink-0 size-[16px]" data-node-id="3:51234" />
              </div>
            )}
            <div className="content-stretch flex flex-col h-full isolate items-center relative shrink-0" id={isNotSelectedAndFalse ? "node-3_51252" : "node-3_51235"} data-name="text">
              <div className="content-stretch flex flex-[1_0_0] items-center mb-[-26px] min-h-px relative z-[2]" id={isNotSelectedAndFalse ? "node-3_51253" : "node-3_51236"} data-name="Текст вкладки">
                {isSelectedAndFalse && (
                  <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Semi_Bold')] font-[var(--font\/font-weight\/bold,600)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/primary_text-color,#cc3d00)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px] whitespace-nowrap" data-node-id="3:51237">
                    <p className="leading-[normal]">{textTemplate}</p>
                  </div>
                )}
                {isNotSelectedAndFalse && (
                  <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/secondary_text-color,#313e78)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px] whitespace-nowrap" data-node-id="3:51254">
                    <p className="leading-[normal]">{textTemplate}</p>
                  </div>
                )}
              </div>
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative z-[1]" id={isNotSelectedAndFalse ? "node-3_51255" : "node-3_51238"} data-name="Невидимый текст">
                {isSelectedAndFalse && (
                  <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Semi_Bold')] font-[var(--font\/font-weight\/bold,600)] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[color:var(--text\/primary_text-color,#cc3d00)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px] whitespace-nowrap" data-node-id="3:51239">
                    <p className="leading-[normal]">{textTemplate}</p>
                  </div>
                )}
                {isNotSelectedAndFalse && (
                  <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Semi_Bold')] font-[var(--font\/font-weight\/bold,600)] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[color:var(--text\/secondary_text-color,#313e78)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px] whitespace-nowrap" data-node-id="3:51256">
                    <p className="leading-[normal]">{textTemplate}</p>
                  </div>
                )}
              </div>
            </div>
            {showCounter && (
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="3:51240" data-name="counter">
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="I3:51240;6953:27065" data-name="_textCounter">
                  <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/danger_text-color,#c2140a)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px] whitespace-nowrap" data-node-id="I3:51240;6953:27065;6953:27070">
                    <p className="leading-[normal]">37</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={`${String.raw`bg-[var(--extra\/marker_color,#cc3d00)] h-[3px] relative rounded-[4px] shrink-0 w-full `}${isNotSelectedAndFalse ? "opacity-0" : ""}`} id={isNotSelectedAndFalse ? "node-3_51258" : "node-3_51241"} data-name="tabsMarker" />
        </div>
        {itemRightTemplate && (
          <div className="content-stretch flex gap-[6px] h-[32px] items-center relative shrink-0" data-node-id="3:51242" data-name="_template">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I3:51242;6953:27057" data-name="text 1">
              <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px] whitespace-nowrap" data-node-id="I3:51242;6953:27058">
                <p className="leading-[normal]">доп. текст</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I3:51242;6953:29889" data-name="icons">
              <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I3:51242;6953:29889;5565:16629" data-name="iconsWrap">
                <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/label_icon-color,#8991a9)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" data-node-id="I3:51242;6953:29889;5565:16629;8306:1722">{`\uE65D`}</p>
              </div>
            </div>
            <div className="content-stretch flex h-[26px] items-center relative shrink-0" data-node-id="I3:51242;6953:27060" data-name="counter">
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="I3:51242;6953:27061" data-name="_textCounter">
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="I3:51242;6953:27061;6953:27072" data-name="HoverCounter">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.2115px] whitespace-nowrap" data-node-id="I3:51242;6953:27061;6953:27072;35:12838">
                    <p className="leading-[normal]">37</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I3:51242;6953:27062" data-name="text 2">
              <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/unaccented_text-color,#999)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px] whitespace-nowrap" data-node-id="I3:51242;6953:27063">
                <p className="leading-[normal]">доп. текст</p>
              </div>
            </div>
          </div>
        )}
      </div>
      {showMore && (
        <div className="content-stretch flex flex-col h-[32px] items-start justify-center relative shrink-0" data-node-id="3:51243" data-name="_more">
          <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0" data-node-id="I3:51243;6953:27076" data-name="_OLDButton">
            <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative rounded-[100px]" data-node-id="I3:51243;6953:27076;3979:16525" data-name="_button">
              <p className="[word-break:break-word] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] leading-[normal] not-italic relative shrink-0 text-[color:var(--text\/link_text-color,#2562aa)] text-[length:var(--font\/font-size\/font-size_m,14px)] tracking-[-0.1974px] whitespace-nowrap" data-node-id="I3:51243;6953:27076;3979:16525;3970:14605">
                Еще...
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

type CaretCursorProps = {
  className?: string;
  style?: "text";
  visible?: boolean;
};

function CaretCursor({ className, style = "text", visible = false }: CaretCursorProps) {
  const isVisible = visible;
  return (
    <div className={className || "h-[24px] relative w-0"} id={isVisible ? "node-3_53316" : "node-3_53314"}>
      {!visible && <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStyleTextVisibleFalse} />}
      {isVisible && (
        <div className="absolute inset-[0_-1px_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgStyleTextVisibleTrue} />
        </div>
      )}
    </div>
  );
}

type SearchProps = {
  className?: string;
  caretCursor?: boolean;
  inlineHeight?: "m";
  shadow?: "false";
  style?: "contrast";
  text?: "false";
};

function Search({ className, caretCursor = true, inlineHeight = "m", shadow = "false", style = "contrast", text = "false" }: SearchProps) {
  return (
    <div className={className || "bg-[var(--background\\/background-color,white)] border border-[var(--border\\/pale_border-color,#e5e7eb)] border-solid content-stretch flex h-[var(--inline_height\\/inline_height_m,24px)] items-center relative rounded-[var(--border-radius\\/border-radius_m,12px)] w-[300px]"} data-node-id="3:51218">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px pl-[var(--offset\/offset_m,12px)] pr-[var(--offset\/offset_2xs,4px)] relative" data-node-id="3:51219" data-name="offsetText">
        {caretCursor && <CaretCursor className="h-[24px] relative shrink-0 w-0" visible />}
        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-end leading-[0] not-italic relative shrink-0 text-[color:var(--components\/input\/placeholder-color_inputtext,rgba(137,145,169,0.6))] text-[length:var(--font\/font-size\/font-size_m,14px)] tracking-[-0.1974px] whitespace-nowrap" data-node-id="3:51221">
          <p className="leading-[var(--font\/line-height\/line-height_m,18px)]">Найти</p>
        </div>
      </div>
    </div>
  );
}

type IconPlusProps = {
  className?: string;
  size?: "16";
};

function IconPlus({ className, size = "16" }: IconPlusProps) {
  return (
    <div className={className || "content-stretch flex items-center justify-center relative"} data-node-id="3:52898">
      <div className="relative shrink-0 size-[16px]" data-node-id="3:52899" data-name="wrap">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWrap} />
      </div>
    </div>
  );
}

type LogoBurgerProps = {
  className?: string;
  hover?: boolean;
  state?: "close";
};

function LogoBurger({ className, hover = false, state = "close" }: LogoBurgerProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-center justify-center relative size-[28px]"} data-node-id="14:17231">
      <div className="content-stretch flex flex-col h-[16px] items-center justify-center pb-[2px] relative shrink-0" data-node-id="14:17232">
        <div className="[word-break:break-word] flex flex-col font-['Accordion-Font:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/label_icon-color,#8991a9)] whitespace-nowrap" data-node-id="14:17233">
          <p className="leading-[normal]">{`\uE91F`}</p>
        </div>
      </div>
    </div>
  );
}

type ComponentProps = {
  className?: string;
  property1?: "default";
};

function Component({ className, property1 = "default" }: ComponentProps) {
  return (
    <div className={className || "relative size-[32px]"} data-node-id="14:17041">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgProperty1Default} />
    </div>
  );
}

type Component1Props = {
  className?: string;
  property1?: "Широкий";
  property2?: "клайнтс";
  propValue?: "True";
  propValue1?: "true";
};

function Component1({ className, property1 = "Широкий", property2 = "клайнтс", propValue = "True", propValue1 = "true" }: Component1Props) {
  return (
    <div className={className || "bg-[#2c3e50] content-stretch flex flex-col gap-[var(--offset\\/none,0px)] h-[768px] items-start overflow-clip pb-[var(--offset\\/offset_2xs,4px)] relative"} data-node-id="14:17450">
      <div className="bg-[#2c3e50] content-stretch flex flex-col gap-[var(--offset\/offset_s,8px)] items-center pb-[var(--offset\/offset_xs,6px)] relative shrink-0" data-node-id="14:17451" data-name="другие">
        <div className="content-stretch flex items-center pt-[var(--offset\/offset_3xs,2px)] px-[var(--offset\/offset_2xs,4px)] relative shrink-0 w-[200px]" data-node-id="I14:17451;1596:245799" data-name="логотип">
          <div className="content-stretch flex flex-[1_0_0] gap-[var(--offset\/offset_s,8px)] h-[40px] items-center min-w-px pl-[var(--offset\/offset_s,8px)] pr-[var(--offset\/offset_2xs,4px)] pt-[var(--offset\/none,0px)] relative rounded-[8px]" data-node-id="I14:17451;1596:245982" data-name="Логотип">
            <Component className="relative shrink-0 size-[32px]" />
            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I14:17451;1596:245982;1596:245925" data-name="название_стрелка">
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px pl-[var(--offset\/none,0px)] pt-[var(--offset\/none,0px)] relative" data-node-id="I14:17451;1596:245982;1596:245958" data-name="Название">
                <p className="[word-break:break-word] font-['Maison_Neue:Extended_Book'] leading-[normal] not-italic relative shrink-0 text-[20px] text-[color:var(--extra\/brand_color,#0085f2)] whitespace-nowrap" data-node-id="I14:17451;1596:245982;1596:245959">
                  saby
                </p>
                <p className="[word-break:break-word] font-['Maison_Neue:Extended_Demi'] leading-[normal] not-italic relative shrink-0 text-[20px] text-[color:var(--icon\/label_icon-color,#8991a9)] whitespace-nowrap" data-node-id="I14:17451;1596:245982;1596:245960">
                  inside
                </p>
                <div className="absolute bg-gradient-to-l from-[var(--background\/navigation_background-color,#2c3e50)] h-[38px] left-[67px] to-[var(--background\/transparency-background\/0\%-navigation_background-color,rgba(44,62,80,0))] top-[-5.5px] w-[50px]" data-node-id="I14:17451;1596:245982;1596:245961" />
              </div>
              <div className="content-stretch flex flex-col items-end justify-center relative rounded-[14px] shrink-0" data-node-id="I14:17451;1596:245982;1596:245928" data-name="templateRight2">
                <div className="content-stretch flex items-center justify-center pl-[12px] pr-[11px] py-[5px] relative rounded-[14px] shrink-0" data-node-id="I14:17451;1596:245982;1596:245929" data-name="templateRight">
                  <div className="h-[16px] relative shrink-0 w-[8px]" data-node-id="I14:17451;1596:245982;1596:245929;15117:73479" data-name="ArrowCutForward 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowCutForward1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[var(--offset\/offset_st,10px)] items-center overflow-clip pl-[14px] pr-[12px] relative shrink-0 w-[200px]" data-node-id="I14:17451;1596:245801" data-name="бургер">
          <LogoBurger className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[28px]" />
          <div className="content-stretch flex h-[24px] items-center relative shrink-0" data-node-id="I14:17451;1596:245803" data-name="_logoConf">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8991a9] text-[10px] tracking-[1.3px] uppercase whitespace-nowrap" data-node-id="I14:17451;1596:245803;1468:100417">
              <p className="leading-[normal]">администратор</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="14:17452" data-name="Базовый компонент">
        <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-node-id="14:17453" data-name="пер_01">
          <div className="bg-[var(--background\/navigation_background-color,#2c3e50)] content-stretch flex items-center pr-[4px] relative rounded-[8px] shrink-0 w-[192px]" data-node-id="I14:17453;15117:73419" data-name="sectionFull">
            <div className="content-stretch flex flex-[1_0_0] gap-[14px] h-[40px] items-center min-w-px overflow-clip pl-[14px] pr-[4px] relative" data-node-id="I14:17453;15117:73419;15117:73268" data-name="_foto">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I14:17453;15117:73419;15117:73268;15117:74024">
                <div className="[word-break:break-word] flex flex-col font-['Accordion-Font-20:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[color:var(--icon\/navigation_icon-color,#9cb1c7)] text-center uppercase whitespace-nowrap" data-node-id="I14:17453;15117:73419;15117:73268;15117:74025">
                  <p className="leading-[normal]">{`\uE901`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/navigation_text-color,#e9ebec)] text-[length:var(--font\/font-size\/font-size_xl,16px)] tracking-[-0.2256px] whitespace-nowrap" data-node-id="I14:17453;15117:73419;15117:73268;15117:74026">
                <p className="leading-[normal]">Приложения</p>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute bg-gradient-to-l from-[var(--background\/navigation_background-color,#2c3e50)] h-[38px] right-[4px] to-[var(--background\/transparency-background\/0\%-navigation_background-color,rgba(44,62,80,0))] top-1/2 w-[12px]" data-node-id="I14:17453;15117:73419;15117:73269" />
          </div>
        </div>
        <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-node-id="14:17454" data-name="пер_02">
          <div className="bg-[var(--background\/navigation_background-color,#2c3e50)] content-stretch flex items-center pr-[4px] relative rounded-[8px] shrink-0 w-[192px]" data-node-id="I14:17454;15117:73419" data-name="sectionFull">
            <div className="content-stretch flex flex-[1_0_0] gap-[14px] h-[40px] items-center min-w-px overflow-clip pl-[14px] pr-[4px] relative" data-node-id="I14:17454;15117:73419;15117:73268" data-name="_foto">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I14:17454;15117:73419;15117:73268;15117:74024">
                <div className="[word-break:break-word] flex flex-col font-['Accordion-Font-20:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[color:var(--icon\/navigation_icon-color,#9cb1c7)] text-center uppercase whitespace-nowrap" data-node-id="I14:17454;15117:73419;15117:73268;15117:74025">
                  <p className="leading-[normal]">{`\uE968`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/navigation_text-color,#e9ebec)] text-[length:var(--font\/font-size\/font-size_xl,16px)] tracking-[-0.2256px] whitespace-nowrap" data-node-id="I14:17454;15117:73419;15117:73268;15117:74026">
                <p className="leading-[normal]">Компоненты</p>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute bg-gradient-to-l from-[var(--background\/navigation_background-color,#2c3e50)] h-[38px] right-[4px] to-[var(--background\/transparency-background\/0\%-navigation_background-color,rgba(44,62,80,0))] top-1/2 w-[12px]" data-node-id="I14:17454;15117:73419;15117:73269" />
          </div>
        </div>
        <div className="content-stretch flex items-center pr-[4px] relative shrink-0" data-node-id="14:17455" data-name="пер_03">
          <div className="flex flex-row items-center self-stretch" data-node-id="I14:17455;15117:73423">
            <div className="content-stretch flex h-full items-end justify-center pb-[5px] pt-[45px] relative shrink-0" data-name="_маркер">
              <div className="bg-[var(--extra\/navigation_marker-color,#0c94ff)] h-[30px] relative rounded-[4px] shrink-0 w-[4px]" data-node-id="I14:17455;15117:73423;15117:73436" />
            </div>
          </div>
          <div className="bg-[var(--background\/navigation_active_background-color,#273748)] content-stretch flex flex-col items-start relative rounded-[8px] shrink-0" data-node-id="I14:17455;15117:73424" data-name="Подраздел">
            <div className="bg-[var(--background\/navigation_active_background-color,#273748)] content-stretch flex items-center overflow-clip pr-[4px] relative rounded-[8px] shrink-0 w-[192px]" data-node-id="I14:17455;15117:73425" data-name="sectionFull">
              <div className="content-stretch flex flex-[1_0_0] gap-[14px] h-[40px] items-center min-w-px overflow-clip pl-[14px] pr-[4px] relative" data-node-id="I14:17455;15117:73425;15117:73304" data-name="_foto">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I14:17455;15117:73425;15117:73304;15117:74024">
                  <div className="[word-break:break-word] flex flex-col font-['Accordion-Font-20:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[color:var(--icon\/navigation_active_icon-color,white)] text-center uppercase whitespace-nowrap" data-node-id="I14:17455;15117:73425;15117:73304;15117:74025">
                    <p className="leading-[normal]">{`\uE971`}</p>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/navigation_active_text-color,white)] text-[length:var(--font\/font-size\/font-size_xl,16px)] tracking-[-0.2256px] whitespace-nowrap" data-node-id="I14:17455;15117:73425;15117:73304;15117:74026">
                  <p className="leading-[normal]">Конструктор</p>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute bg-gradient-to-l from-[var(--background\/navigation_active_background-color,#273748)] h-[38px] right-[4px] to-[var(--background\/transparency-background\/0\%-navigation_active_background-color,rgba(39,55,72,0))] top-1/2 w-[12px]" data-node-id="I14:17455;15117:73425;15117:73305" />
            </div>
            <div className="bg-[var(--background\/navigation_active_background-color,#273748)] content-stretch flex items-center overflow-clip pr-[4px] relative rounded-[8px] shrink-0 w-[192px]" data-node-id="I14:17455;15117:73426" data-name="sectionFull">
              <div className="content-stretch flex flex-[1_0_0] gap-[14px] h-[40px] items-center min-w-px overflow-clip pl-[14px] pr-[4px] relative" data-node-id="I14:17455;15117:73426;15117:73304" data-name="_foto">
                <div className="content-stretch flex flex-col items-start opacity-0 relative shrink-0" data-node-id="I14:17455;15117:73426;15117:73304;15117:74024">
                  <div className="[word-break:break-word] flex flex-col font-['Accordion-Font-20:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[color:var(--icon\/navigation_active_icon-color,white)] text-center uppercase whitespace-nowrap" data-node-id="I14:17455;15117:73426;15117:73304;15117:74025">
                    <p className="leading-[normal]">{`\uE928`}</p>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/navigation_active_text-color,white)] text-[length:var(--font\/font-size\/font-size_xl,16px)] tracking-[-0.2256px] whitespace-nowrap" data-node-id="I14:17455;15117:73426;15117:73304;15117:74026">
                  <p className="leading-[normal]">Сайты</p>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute bg-gradient-to-l from-[var(--background\/navigation_active_background-color,#273748)] h-[38px] right-[4px] to-[var(--background\/transparency-background\/0\%-navigation_active_background-color,rgba(39,55,72,0))] top-1/2 w-[12px]" data-node-id="I14:17455;15117:73426;15117:73305" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-node-id="14:17456" data-name="пер_04">
          <div className="bg-[var(--background\/navigation_background-color,#2c3e50)] content-stretch flex items-center pr-[4px] relative rounded-[8px] shrink-0 w-[192px]" data-node-id="I14:17456;15117:73419" data-name="sectionFull">
            <div className="content-stretch flex flex-[1_0_0] gap-[14px] h-[40px] items-center min-w-px overflow-clip pl-[14px] pr-[4px] relative" data-node-id="I14:17456;15117:73419;15117:73268" data-name="_foto">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I14:17456;15117:73419;15117:73268;15117:74024">
                <div className="[word-break:break-word] flex flex-col font-['Accordion-Font-20:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[color:var(--icon\/navigation_icon-color,#9cb1c7)] text-center uppercase whitespace-nowrap" data-node-id="I14:17456;15117:73419;15117:73268;15117:74025">
                  <p className="leading-[normal]">{`\uE96F`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/navigation_text-color,#e9ebec)] text-[length:var(--font\/font-size\/font-size_xl,16px)] tracking-[-0.2256px] whitespace-nowrap" data-node-id="I14:17456;15117:73419;15117:73268;15117:74026">
                <p className="leading-[normal]">Демо</p>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute bg-gradient-to-l from-[var(--background\/navigation_background-color,#2c3e50)] h-[38px] right-[4px] to-[var(--background\/transparency-background\/0\%-navigation_background-color,rgba(44,62,80,0))] top-1/2 w-[12px]" data-node-id="I14:17456;15117:73419;15117:73269" />
          </div>
        </div>
        <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-node-id="14:17457" data-name="пер_05">
          <div className="bg-[var(--background\/navigation_background-color,#2c3e50)] content-stretch flex items-center pr-[4px] relative rounded-[8px] shrink-0 w-[192px]" data-node-id="I14:17457;15117:73419" data-name="sectionFull">
            <div className="content-stretch flex flex-[1_0_0] gap-[14px] h-[40px] items-center min-w-px overflow-clip pl-[14px] pr-[4px] relative" data-node-id="I14:17457;15117:73419;15117:73268" data-name="_foto">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I14:17457;15117:73419;15117:73268;15117:74024">
                <div className="[word-break:break-word] flex flex-col font-['Accordion-Font-20:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[color:var(--icon\/navigation_icon-color,#9cb1c7)] text-center uppercase whitespace-nowrap" data-node-id="I14:17457;15117:73419;15117:73268;15117:74025">
                  <p className="leading-[normal]">{`\uE94A`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/navigation_text-color,#e9ebec)] text-[length:var(--font\/font-size\/font-size_xl,16px)] tracking-[-0.2256px] whitespace-nowrap" data-node-id="I14:17457;15117:73419;15117:73268;15117:74026">
                <p className="leading-[normal]">Маршруты</p>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute bg-gradient-to-l from-[var(--background\/navigation_background-color,#2c3e50)] h-[38px] right-[4px] to-[var(--background\/transparency-background\/0\%-navigation_background-color,rgba(44,62,80,0))] top-1/2 w-[12px]" data-node-id="I14:17457;15117:73419;15117:73269" />
          </div>
        </div>
        <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-node-id="14:17458" data-name="пер_06">
          <div className="bg-[var(--background\/navigation_background-color,#2c3e50)] content-stretch flex items-center pr-[4px] relative rounded-[8px] shrink-0 w-[192px]" data-node-id="I14:17458;15117:73419" data-name="sectionFull">
            <div className="content-stretch flex flex-[1_0_0] gap-[14px] h-[40px] items-center min-w-px overflow-clip pl-[14px] pr-[4px] relative" data-node-id="I14:17458;15117:73419;15117:73268" data-name="_foto">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I14:17458;15117:73419;15117:73268;15117:74024">
                <div className="[word-break:break-word] flex flex-col font-['Accordion-Font-20:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[color:var(--icon\/navigation_icon-color,#9cb1c7)] text-center uppercase whitespace-nowrap" data-node-id="I14:17458;15117:73419;15117:73268;15117:74025">
                  <p className="leading-[normal]">{`\uE978`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/navigation_text-color,#e9ebec)] text-[length:var(--font\/font-size\/font-size_xl,16px)] tracking-[-0.2256px] whitespace-nowrap" data-node-id="I14:17458;15117:73419;15117:73268;15117:74026">
                <p className="leading-[normal]">Социальная сеть</p>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute bg-gradient-to-l from-[var(--background\/navigation_background-color,#2c3e50)] h-[38px] right-[4px] to-[var(--background\/transparency-background\/0\%-navigation_background-color,rgba(44,62,80,0))] top-1/2 w-[12px]" data-node-id="I14:17458;15117:73419;15117:73269" />
          </div>
        </div>
        <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-node-id="14:17460" data-name="пер_08">
          <div className="bg-[var(--background\/navigation_background-color,#2c3e50)] content-stretch flex items-center pr-[4px] relative rounded-[8px] shrink-0 w-[192px]" data-node-id="I14:17460;15117:73419" data-name="sectionFull">
            <div className="content-stretch flex flex-[1_0_0] gap-[14px] h-[40px] items-center min-w-px overflow-clip pl-[14px] pr-[4px] relative" data-node-id="I14:17460;15117:73419;15117:73268" data-name="_foto">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I14:17460;15117:73419;15117:73268;15117:74024">
                <div className="[word-break:break-word] flex flex-col font-['Accordion-Font-20:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[color:var(--icon\/navigation_icon-color,#9cb1c7)] text-center uppercase whitespace-nowrap" data-node-id="I14:17460;15117:73419;15117:73268;15117:74025">
                  <p className="leading-[normal]">{`\uE984`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/navigation_text-color,#e9ebec)] text-[length:var(--font\/font-size\/font-size_xl,16px)] tracking-[-0.2256px] whitespace-nowrap" data-node-id="I14:17460;15117:73419;15117:73268;15117:74026">
                <p className="leading-[normal]">Машинное обучение</p>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute bg-gradient-to-l from-[var(--background\/navigation_background-color,#2c3e50)] h-[38px] right-[4px] to-[var(--background\/transparency-background\/0\%-navigation_background-color,rgba(44,62,80,0))] top-1/2 w-[12px]" data-node-id="I14:17460;15117:73419;15117:73269" />
          </div>
        </div>
        <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-node-id="14:17461" data-name="пер_09">
          <div className="bg-[var(--background\/navigation_background-color,#2c3e50)] content-stretch flex items-center pr-[4px] relative rounded-[8px] shrink-0 w-[192px]" data-node-id="I14:17461;15117:73419" data-name="sectionFull">
            <div className="content-stretch flex flex-[1_0_0] gap-[14px] h-[40px] items-center min-w-px overflow-clip pl-[14px] pr-[4px] relative" data-node-id="I14:17461;15117:73419;15117:73268" data-name="_foto">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I14:17461;15117:73419;15117:73268;15117:74024">
                <div className="[word-break:break-word] flex flex-col font-['Accordion-Font-20:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[color:var(--icon\/navigation_icon-color,#9cb1c7)] text-center uppercase whitespace-nowrap" data-node-id="I14:17461;15117:73419;15117:73268;15117:74025">
                  <p className="leading-[normal]">{`\uE924`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/navigation_text-color,#e9ebec)] text-[length:var(--font\/font-size\/font-size_xl,16px)] tracking-[-0.2256px] whitespace-nowrap" data-node-id="I14:17461;15117:73419;15117:73268;15117:74026">
                <p className="leading-[normal]">Торги</p>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute bg-gradient-to-l from-[var(--background\/navigation_background-color,#2c3e50)] h-[38px] right-[4px] to-[var(--background\/transparency-background\/0\%-navigation_background-color,rgba(44,62,80,0))] top-1/2 w-[12px]" data-node-id="I14:17461;15117:73419;15117:73269" />
          </div>
        </div>
        <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-node-id="14:17462" data-name="пер_10">
          <div className="bg-[var(--background\/navigation_background-color,#2c3e50)] content-stretch flex items-center pr-[4px] relative rounded-[8px] shrink-0 w-[192px]" data-node-id="I14:17462;15117:73419" data-name="sectionFull">
            <div className="content-stretch flex flex-[1_0_0] gap-[14px] h-[40px] items-center min-w-px overflow-clip pl-[14px] pr-[4px] relative" data-node-id="I14:17462;15117:73419;15117:73268" data-name="_foto">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I14:17462;15117:73419;15117:73268;15117:74024">
                <div className="[word-break:break-word] flex flex-col font-['Accordion-Font-20:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[color:var(--icon\/navigation_icon-color,#9cb1c7)] text-center uppercase whitespace-nowrap" data-node-id="I14:17462;15117:73419;15117:73268;15117:74025">
                  <p className="leading-[normal]">{`\uE931`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/navigation_text-color,#e9ebec)] text-[length:var(--font\/font-size\/font-size_xl,16px)] tracking-[-0.2256px] whitespace-nowrap" data-node-id="I14:17462;15117:73419;15117:73268;15117:74026">
                <p className="leading-[normal]">Маркет</p>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute bg-gradient-to-l from-[var(--background\/navigation_background-color,#2c3e50)] h-[38px] right-[4px] to-[var(--background\/transparency-background\/0\%-navigation_background-color,rgba(44,62,80,0))] top-1/2 w-[12px]" data-node-id="I14:17462;15117:73419;15117:73269" />
          </div>
        </div>
        <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-node-id="14:17463" data-name="пер_11">
          <div className="bg-[var(--background\/navigation_background-color,#2c3e50)] content-stretch flex items-center pr-[4px] relative rounded-[8px] shrink-0 w-[192px]" data-node-id="I14:17463;15117:73419" data-name="sectionFull">
            <div className="content-stretch flex flex-[1_0_0] gap-[14px] h-[40px] items-center min-w-px overflow-clip pl-[14px] pr-[4px] relative" data-node-id="I14:17463;15117:73419;15117:73268" data-name="_foto">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I14:17463;15117:73419;15117:73268;15117:74024">
                <div className="[word-break:break-word] flex flex-col font-['Accordion-Font-20:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[color:var(--icon\/navigation_icon-color,#9cb1c7)] text-center uppercase whitespace-nowrap" data-node-id="I14:17463;15117:73419;15117:73268;15117:74025">
                  <p className="leading-[normal]">{`\uE92A`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/navigation_text-color,#e9ebec)] text-[length:var(--font\/font-size\/font-size_xl,16px)] tracking-[-0.2256px] whitespace-nowrap" data-node-id="I14:17463;15117:73419;15117:73268;15117:74026">
                <p className="leading-[normal]">Отчетность</p>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute bg-gradient-to-l from-[var(--background\/navigation_background-color,#2c3e50)] h-[38px] right-[4px] to-[var(--background\/transparency-background\/0\%-navigation_background-color,rgba(44,62,80,0))] top-1/2 w-[12px]" data-node-id="I14:17463;15117:73419;15117:73269" />
          </div>
        </div>
        <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-node-id="14:17464" data-name="пер_12">
          <div className="bg-[var(--background\/navigation_background-color,#2c3e50)] content-stretch flex items-center pr-[4px] relative rounded-[8px] shrink-0 w-[192px]" data-node-id="I14:17464;15117:73419" data-name="sectionFull">
            <div className="content-stretch flex flex-[1_0_0] gap-[14px] h-[40px] items-center min-w-px overflow-clip pl-[14px] pr-[4px] relative" data-node-id="I14:17464;15117:73419;15117:73268" data-name="_foto">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I14:17464;15117:73419;15117:73268;15117:74024">
                <div className="[word-break:break-word] flex flex-col font-['Accordion-Font-20:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[color:var(--icon\/navigation_icon-color,#9cb1c7)] text-center uppercase whitespace-nowrap" data-node-id="I14:17464;15117:73419;15117:73268;15117:74025">
                  <p className="leading-[normal]">{`\uE9DE`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/navigation_text-color,#e9ebec)] text-[length:var(--font\/font-size\/font-size_xl,16px)] tracking-[-0.2256px] whitespace-nowrap" data-node-id="I14:17464;15117:73419;15117:73268;15117:74026">
                <p className="leading-[normal]">Кастомизация</p>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute bg-gradient-to-l from-[var(--background\/navigation_background-color,#2c3e50)] h-[38px] right-[4px] to-[var(--background\/transparency-background\/0\%-navigation_background-color,rgba(44,62,80,0))] top-1/2 w-[12px]" data-node-id="I14:17464;15117:73419;15117:73269" />
          </div>
        </div>
        <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-node-id="14:17465" data-name="пер_13">
          <div className="bg-[var(--background\/navigation_background-color,#2c3e50)] content-stretch flex items-center pr-[4px] relative rounded-[8px] shrink-0 w-[192px]" data-node-id="I14:17465;15117:73419" data-name="sectionFull">
            <div className="content-stretch flex flex-[1_0_0] gap-[14px] h-[40px] items-center min-w-px overflow-clip pl-[14px] pr-[4px] relative" data-node-id="I14:17465;15117:73419;15117:73268" data-name="_foto">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I14:17465;15117:73419;15117:73268;15117:74024">
                <div className="[word-break:break-word] flex flex-col font-['Accordion-Font-20:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[color:var(--icon\/navigation_icon-color,#9cb1c7)] text-center uppercase whitespace-nowrap" data-node-id="I14:17465;15117:73419;15117:73268;15117:74025">
                  <p className="leading-[normal]">{`\uE92D`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/navigation_text-color,#e9ebec)] text-[length:var(--font\/font-size\/font-size_xl,16px)] tracking-[-0.2256px] whitespace-nowrap" data-node-id="I14:17465;15117:73419;15117:73268;15117:74026">
                <p className="leading-[normal]">Система</p>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute bg-gradient-to-l from-[var(--background\/navigation_background-color,#2c3e50)] h-[38px] right-[4px] to-[var(--background\/transparency-background\/0\%-navigation_background-color,rgba(44,62,80,0))] top-1/2 w-[12px]" data-node-id="I14:17465;15117:73419;15117:73269" />
          </div>
        </div>
      </div>
    </div>
  );
}

type Component2Props = {
  className?: string;
  step?: "Реестр список";
};

function Component2({ className, step = "Реестр список" }: Component2Props) {
  return (
    <div className={className || "bg-[var(--background\\/unaccented_background-color,#f8f8f8)] content-stretch flex h-[900px] items-start overflow-clip relative w-[1600px]"} data-node-id="40:27302">
      <Component1 className="bg-[#2c3e50] content-stretch flex flex-col gap-[var(--offset\/none,0px)] h-full items-start overflow-clip pb-[var(--offset\/offset_2xs,4px)] relative shrink-0" />
      <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-node-id="40:27304" data-name="Контент">
        <div className="bg-[var(--background\/unaccented_background-color,#f8f8f8)] content-stretch flex h-[46px] items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="40:27305" data-name="Шапка реестра">
          <div className="content-stretch flex gap-[var(--offset\/offset_m,12px)] h-[44px] items-center pl-[12px] relative shrink-0" data-node-id="40:27306" data-name="шапка">
            <div className="content-stretch flex gap-[var(--offset\/offset_m,12px)] items-center relative shrink-0" data-node-id="40:27307" data-name="Плюс">
              <div className="content-stretch flex items-start relative shrink-0" data-node-id="I40:27307;1658:29282" data-name="button_main">
                <div className="bg-[var(--extra\/brand_color,#0085f2)] content-stretch flex flex-col h-[26px] items-center justify-center px-[var(--offset\/offset_st,10px)] relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 w-[40px]" data-node-id="I40:27307;1658:29282;1658:29222" data-name="Button">
                  <IconPlus className="content-stretch flex items-center justify-center relative shrink-0" />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-between pr-[4px] relative shrink-0 w-[1078px]" data-node-id="40:27309" data-name="wrap1">
            <Search caretCursor={false} className="bg-[var(--background\/background-color,white)] border border-[var(--border\/pale_border-color,#e5e7eb)] border-solid content-stretch flex h-[24px] items-center relative rounded-[var(--border-radius\/border-radius_m,12px)] shrink-0 w-[300px]" />
            <button className="content-stretch cursor-pointer flex gap-[2px] items-center relative shrink-0" data-node-id="40:27311">
              <div className="content-stretch flex flex-col items-center justify-center pt-[2px] relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[32px]" data-node-id="40:27315" data-name="ghost">
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-node-id="I40:27315;17890:9799" data-name="_buttonContent">
                  <div className="content-stretch flex items-center relative shrink-0" data-node-id="I40:27315;17890:9799;17890:165" data-name="iconWrap">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:27315;17890:9799;17890:166" data-name="icons/font">
                      <div className="content-stretch flex flex-col items-center justify-center pb-[2px] relative shrink-0 size-[24px]" data-node-id="I40:27315;17890:9799;17890:166;17887:22651" data-name="iconWrap">
                        <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/m_icon_font-family,'cbuc-icons24:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/secondary_icon-color,#656c87)] text-[length:var(--icon\/icon_size\/icon-size_m,24px)] text-left whitespace-nowrap" data-node-id="I40:27315;17890:9799;17890:166;17887:22652">{`\uE94C`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-[8px] size-[16px] top-[8px]" data-node-id="300:16970" data-name="clickCursor">
                <div className="absolute bg-[#6cc] inset-0 opacity-50 rounded-[32px]" data-node-id="I300:16970;3784:15252" data-name="dot" />
                <CursorArrow className="absolute left-px size-[24px] top-[5px]" />
              </div>
            </button>
          </div>
        </div>
        <div className="bg-[var(--background\/unaccented_background-color,#f8f8f8)] content-stretch flex h-[32px] items-center justify-end opacity-0 relative shrink-0 w-full" data-node-id="40:27316" data-name="Вкладки">
          <div className="content-stretch flex gap-[12px] items-start px-[12px] relative shrink-0" data-node-id="40:27317" data-name="tabs/horizontal">
            <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-node-id="I40:27317;11481:9979" data-name="template">
              <div className="content-stretch flex flex-col h-[32px] items-start justify-center relative shrink-0" data-node-id="I40:27317;3050:11428" data-name="Контент с маркером">
                <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px pt-[3px] relative w-full" data-node-id="I40:27317;3050:11469" data-name="Контент внутри справа">
                  <div className="content-stretch flex flex-col h-full isolate items-center relative shrink-0" data-node-id="I40:27317;6648:17989" data-name="text">
                    <div className="content-stretch flex flex-[1_0_0] items-center mb-[-26px] min-h-px relative z-[2]" data-node-id="I40:27317;3050:11474" data-name="Текст вкладки">
                      <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Semi_Bold')] font-[var(--font\/font-weight\/bold,600)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/primary_text-color,#cc3d00)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px] whitespace-nowrap" data-node-id="I40:27317;3050:11475">
                        <p className="leading-[normal]">Страницы</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative z-[1]" data-node-id="I40:27317;6648:18014" data-name="Невидимый текст">
                      <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Semi_Bold')] font-[var(--font\/font-weight\/bold,600)] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[color:var(--text\/primary_text-color,#cc3d00)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px] whitespace-nowrap" data-node-id="I40:27317;6648:18015">
                        <p className="leading-[normal]">Страницы</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[var(--extra\/marker_color,#cc3d00)] h-[3px] relative rounded-[4px] shrink-0 w-full" data-node-id="I40:27317;3050:11443" data-name="tabsMarker" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-start px-[12px] relative shrink-0" data-node-id="40:27318" data-name="Статистика">
            <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-node-id="I40:27318;11481:10111" data-name="template">
              <div className="content-stretch flex flex-col h-[32px] items-start justify-center relative shrink-0" data-node-id="I40:27318;3050:12014" data-name="Контент с маркером">
                <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px pt-[3px] relative w-full" data-node-id="I40:27318;3050:12017" data-name="Контент внутри справа">
                  <div className="content-stretch flex flex-col h-full isolate items-center relative shrink-0" data-node-id="I40:27318;6648:18023" data-name="text">
                    <div className="content-stretch flex flex-[1_0_0] items-center mb-[-26px] min-h-px relative z-[2]" data-node-id="I40:27318;3050:12022" data-name="Текст вкладки">
                      <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/secondary_text-color,#313e78)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px] whitespace-nowrap" data-node-id="I40:27318;3050:12023">
                        <p className="leading-[normal]">Параметры</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative z-[1]" data-node-id="I40:27318;6648:18111" data-name="Невидимый текст">
                      <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Semi_Bold')] font-[var(--font\/font-weight\/bold,600)] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[color:var(--text\/secondary_text-color,#313e78)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px] whitespace-nowrap" data-node-id="I40:27318;6648:18112">
                        <p className="leading-[normal]">Параметры</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[var(--extra\/marker_color,#cc3d00)] h-[3px] opacity-0 relative rounded-[4px] shrink-0 w-full" data-node-id="I40:27318;3050:12025" data-name="tabsMarker" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-start px-[12px] relative shrink-0" data-node-id="40:27319" data-name="Статистика">
            <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-node-id="I40:27319;11481:10111" data-name="template">
              <div className="content-stretch flex flex-col h-[32px] items-start justify-center relative shrink-0" data-node-id="I40:27319;3050:12014" data-name="Контент с маркером">
                <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px pt-[3px] relative w-full" data-node-id="I40:27319;3050:12017" data-name="Контент внутри справа">
                  <div className="content-stretch flex flex-col h-full isolate items-center relative shrink-0" data-node-id="I40:27319;6648:18023" data-name="text">
                    <div className="content-stretch flex flex-[1_0_0] items-center mb-[-26px] min-h-px relative z-[2]" data-node-id="I40:27319;3050:12022" data-name="Текст вкладки">
                      <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/secondary_text-color,#313e78)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px] whitespace-nowrap" data-node-id="I40:27319;3050:12023">
                        <p className="leading-[normal]">Статистика</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative z-[1]" data-node-id="I40:27319;6648:18111" data-name="Невидимый текст">
                      <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Semi_Bold')] font-[var(--font\/font-weight\/bold,600)] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[color:var(--text\/secondary_text-color,#313e78)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px] whitespace-nowrap" data-node-id="I40:27319;6648:18112">
                        <p className="leading-[normal]">Статистика</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[var(--extra\/marker_color,#cc3d00)] h-[3px] opacity-0 relative rounded-[4px] shrink-0 w-full" data-node-id="I40:27319;3050:12025" data-name="tabsMarker" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-start px-[12px] relative shrink-0" data-node-id="40:27320" data-name="tabs/horizontal">
            <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-node-id="I40:27320;11481:10111" data-name="template">
              <div className="content-stretch flex flex-col h-[32px] items-start justify-center relative shrink-0" data-node-id="I40:27320;3050:12014" data-name="Контент с маркером">
                <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px pt-[3px] relative w-full" data-node-id="I40:27320;3050:12017" data-name="Контент внутри справа">
                  <div className="content-stretch flex flex-col h-full isolate items-center relative shrink-0" data-node-id="I40:27320;6648:18023" data-name="text">
                    <div className="content-stretch flex flex-[1_0_0] items-center mb-[-26px] min-h-px relative z-[2]" data-node-id="I40:27320;3050:12022" data-name="Текст вкладки">
                      <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/secondary_text-color,#313e78)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px] whitespace-nowrap" data-node-id="I40:27320;3050:12023">
                        <p className="leading-[normal]">Источники</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative z-[1]" data-node-id="I40:27320;6648:18111" data-name="Невидимый текст">
                      <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Semi_Bold')] font-[var(--font\/font-weight\/bold,600)] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[color:var(--text\/secondary_text-color,#313e78)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px] whitespace-nowrap" data-node-id="I40:27320;6648:18112">
                        <p className="leading-[normal]">Источники</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[var(--extra\/marker_color,#cc3d00)] h-[3px] opacity-0 relative rounded-[4px] shrink-0 w-full" data-node-id="I40:27320;3050:12025" data-name="tabsMarker" />
              </div>
            </div>
          </div>
          <TabsHorizontal className="content-stretch flex gap-[12px] items-start px-[12px] relative shrink-0" selected={false} showIcon={false} showImage={false} textTemplate="Посетители" />
          <TabsHorizontal className="content-stretch flex gap-[12px] items-start px-[12px] relative shrink-0" selected={false} showIcon={false} showImage={false} textTemplate="Отклики" />
        </div>
        <div className="content-stretch flex flex-[1_0_0] items-start min-h-px relative w-full" data-node-id="40:29193">
          <div className="content-stretch flex flex-col h-full items-start px-[4px] relative shrink-0 w-[270px]" data-node-id="40:29003" data-name="Master">
            <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-node-id="40:29007" data-name="Разделы">
              <div className="bg-[var(--components\/list\/master_item_selected_background-color_list,#ebf4ff)] content-stretch flex items-start min-h-[31px] overflow-clip pb-[var(--components\/list\/master\/master_item_padding-bottom_list,3px)] pl-[var(--offset\/offset_l,16px)] pr-[var(--offset\/offset_s,8px)] pt-[var(--components\/list\/master\/master_item_padding-top_list,4px)] relative rounded-[var(--border-radius\/border-radius_xs,6px)] shrink-0 w-full" data-node-id="40:29008" data-name="Список">
                <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-node-id="I40:29008;25581:1523" data-name="contentWrap">
                  <div className="content-stretch flex flex-col items-start py-[3px] relative self-stretch shrink-0" data-node-id="I40:29008;25581:1526" data-name="_bricks/textContent">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-[var(--font\/font-weight\/bold,600)] leading-[normal] not-italic overflow-hidden relative shrink-0 text-[15px] text-[color:var(--text\/text-color,black)] text-ellipsis tracking-[-0.2115px] whitespace-nowrap" data-node-id="I40:29008;25581:1526;25571:491">
                      Все
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-end justify-center min-h-[24px] relative shrink-0" data-node-id="I40:29008;34270:1938" data-name="wrapTemplate">
                  <div className="content-stretch flex gap-[var(--offset\/offset_m,12px)] items-center pl-[var(--offset\/offset_xs,6px)] pr-[var(--offset\/offset_2xs,4px)] py-px relative rounded-[100px] shrink-0 w-full" data-node-id="I40:29008;25581:1527" data-name="_bricks/counter">
                    <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I40:29008;25581:1527;25571:459" data-name="secondaryCounter">
                      <p className="[word-break:break-word] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-normal leading-[var(--font\/line-height\/line-height_m,18px)] not-italic relative shrink-0 text-[color:var(--text\/secondary_text-color,#313e78)] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px] whitespace-nowrap" data-node-id="I40:29008;25581:1527;25571:460">
                        1509
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex h-[var(--icon\/icon_size\/icon-size_m,24px)] items-center left-0 overflow-clip pb-[var(--offset\/offset_3xs,2px)] top-[4px]" data-node-id="I40:29008;25581:1528" data-name="marker/Marker">
                  <div className="bg-[var(--extra\/marker_color,#cc3d00)] h-[16px] relative rounded-[var(--border-radius\/border-radius_2xs,4px)] shrink-0 w-[3px]" data-node-id="I40:29008;25581:1528;18419:396" data-name="marker" />
                </div>
              </div>
              <div className="bg-[#f8f8f8] content-stretch flex gap-[4px] h-[31px] items-center pr-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="40:29009" data-name="Пункты в master">
                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-node-id="I40:29009;127:35343" data-name="Content">
                  <div className="content-stretch flex flex-[1_0_0] gap-px h-full items-center min-w-px pl-[3px] relative" data-node-id="I40:29009;127:35344" data-name="Стрелка и текст">
                    <div className="content-stretch flex h-full items-start relative shrink-0 w-[12px]" data-node-id="I40:29009;127:35345">
                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-node-id="I40:29009;127:35346" data-name="_arrow">
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29009;127:35346;7571:22482" data-name="icons">
                          <div className="content-stretch flex flex-col items-center justify-center pb-[0.5px] relative shrink-0 size-[12px]" data-node-id="I40:29009;127:35346;7571:22482;5565:16633" data-name="Ui базовый набор / Font">
                            <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8991a9] text-[12px] whitespace-nowrap" data-node-id="I40:29009;127:35346;7571:22482;5565:16633;8306:1722">{`\uE96E`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-node-id="I40:29009;127:35347">
                      <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I40:29009;127:35348" data-name="Название">
                        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[length:var(--font\/font-size\/font-size_l,15px)] text-black text-ellipsis tracking-[-0.2115px] whitespace-nowrap" data-node-id="I40:29009;127:35349">
                          <p className="leading-[1.4] overflow-hidden text-[15px] text-ellipsis">01 Адыгея</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] h-full justify-center leading-[0] min-w-px not-italic relative text-[#313e78] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px]" data-node-id="I40:29009;127:35350">
                        <p className="leading-[1.4]">11</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[16px] left-0 rounded-[4px] top-[7px] w-[3px]" data-node-id="I40:29009;127:35353" />
              </div>
              <div className="bg-[#f8f8f8] content-stretch flex gap-[4px] h-[31px] items-center pr-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="40:29010" data-name="Пункты в master">
                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-node-id="I40:29010;127:35355" data-name="Content">
                  <div className="content-stretch flex flex-[1_0_0] gap-px h-full items-center min-w-px pl-[3px] relative" data-node-id="I40:29010;127:35356" data-name="Стрелка и текст">
                    <div className="content-stretch flex h-full items-start relative shrink-0 w-[12px]" data-node-id="I40:29010;127:35357">
                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-node-id="I40:29010;127:35358" data-name="_arrow">
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29010;127:35358;7571:22482" data-name="icons">
                          <div className="content-stretch flex flex-col items-center justify-center pb-[0.5px] relative shrink-0 size-[12px]" data-node-id="I40:29010;127:35358;7571:22482;5565:16633" data-name="Ui базовый набор / Font">
                            <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8991a9] text-[12px] whitespace-nowrap" data-node-id="I40:29010;127:35358;7571:22482;5565:16633;8306:1722">{`\uE96E`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-node-id="I40:29010;127:35359">
                      <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I40:29010;127:35360" data-name="Название">
                        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[length:var(--font\/font-size\/font-size_l,15px)] text-black text-ellipsis tracking-[-0.2115px] whitespace-nowrap" data-node-id="I40:29010;127:35361">
                          <p className="leading-[1.4] overflow-hidden text-[15px] text-ellipsis">02 Башкортостан</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] h-full justify-center leading-[0] min-w-px not-italic relative text-[#313e78] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px]" data-node-id="I40:29010;127:35362">
                        <p className="leading-[1.4]">54</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[16px] left-0 rounded-[4px] top-[7px] w-[3px]" data-node-id="I40:29010;127:35365" />
              </div>
              <div className="bg-[#f8f8f8] content-stretch flex gap-[4px] h-[31px] items-center pr-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="40:29011" data-name="Пункты в master">
                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-node-id="I40:29011;127:35355" data-name="Content">
                  <div className="content-stretch flex flex-[1_0_0] gap-px h-full items-center min-w-px pl-[3px] relative" data-node-id="I40:29011;127:35356" data-name="Стрелка и текст">
                    <div className="content-stretch flex h-full items-start relative shrink-0 w-[12px]" data-node-id="I40:29011;127:35357">
                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-node-id="I40:29011;127:35358" data-name="_arrow">
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29011;127:35358;7571:22482" data-name="icons">
                          <div className="content-stretch flex flex-col items-center justify-center pb-[0.5px] relative shrink-0 size-[12px]" data-node-id="I40:29011;127:35358;7571:22482;5565:16633" data-name="Ui базовый набор / Font">
                            <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8991a9] text-[12px] whitespace-nowrap" data-node-id="I40:29011;127:35358;7571:22482;5565:16633;8306:1722">{`\uE96E`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-node-id="I40:29011;127:35359">
                      <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I40:29011;127:35360" data-name="Название">
                        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[length:var(--font\/font-size\/font-size_l,15px)] text-black text-ellipsis tracking-[-0.2115px] whitespace-nowrap" data-node-id="I40:29011;127:35361">
                          <p className="leading-[1.4] overflow-hidden text-[15px] text-ellipsis">03 Бурятия</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] h-full justify-center leading-[0] min-w-px not-italic relative text-[#313e78] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px]" data-node-id="I40:29011;127:35362">
                        <p className="leading-[1.4]">5</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[16px] left-0 rounded-[4px] top-[7px] w-[3px]" data-node-id="I40:29011;127:35365" />
              </div>
              <div className="bg-[#f8f8f8] content-stretch flex gap-[4px] h-[31px] items-center pr-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="40:29012" data-name="Пункты в master">
                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-node-id="I40:29012;127:35355" data-name="Content">
                  <div className="content-stretch flex flex-[1_0_0] gap-px h-full items-center min-w-px pl-[3px] relative" data-node-id="I40:29012;127:35356" data-name="Стрелка и текст">
                    <div className="content-stretch flex h-full items-start relative shrink-0 w-[12px]" data-node-id="I40:29012;127:35357">
                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-node-id="I40:29012;127:35358" data-name="_arrow">
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29012;127:35358;7571:22482" data-name="icons">
                          <div className="content-stretch flex flex-col items-center justify-center pb-[0.5px] relative shrink-0 size-[12px]" data-node-id="I40:29012;127:35358;7571:22482;5565:16633" data-name="Ui базовый набор / Font">
                            <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8991a9] text-[12px] whitespace-nowrap" data-node-id="I40:29012;127:35358;7571:22482;5565:16633;8306:1722">{`\uE96E`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-node-id="I40:29012;127:35359">
                      <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I40:29012;127:35360" data-name="Название">
                        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[length:var(--font\/font-size\/font-size_l,15px)] text-black text-ellipsis tracking-[-0.2115px] whitespace-nowrap" data-node-id="I40:29012;127:35361">
                          <p className="leading-[1.4] overflow-hidden text-[15px] text-ellipsis">04 Алтай</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] h-full justify-center leading-[0] min-w-px not-italic relative text-[#313e78] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px]" data-node-id="I40:29012;127:35362">
                        <p className="leading-[1.4]">7</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[16px] left-0 rounded-[4px] top-[7px] w-[3px]" data-node-id="I40:29012;127:35365" />
              </div>
              <div className="bg-[#f8f8f8] content-stretch flex gap-[4px] items-center pr-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="40:29013" data-name="Пункты в master">
                <div className="content-stretch flex flex-[1_0_0] h-[31px] items-center min-w-px relative" data-node-id="I40:29013;127:35355" data-name="Content">
                  <div className="content-stretch flex flex-[1_0_0] gap-px h-full items-center min-w-px pl-[3px] relative" data-node-id="I40:29013;127:35356" data-name="Стрелка и текст">
                    <div className="content-stretch flex h-full items-start relative shrink-0 w-[12px]" data-node-id="I40:29013;127:35357">
                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-node-id="I40:29013;127:35358" data-name="_arrow">
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29013;127:35358;7571:22482" data-name="icons">
                          <div className="content-stretch flex flex-col items-center justify-center pb-[0.5px] relative shrink-0 size-[12px]" data-node-id="I40:29013;127:35358;7571:22482;5565:16633" data-name="Ui базовый набор / Font">
                            <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8991a9] text-[12px] whitespace-nowrap" data-node-id="I40:29013;127:35358;7571:22482;5565:16633;8306:1722">{`\uE96E`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-node-id="I40:29013;127:35359">
                      <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I40:29013;127:35360" data-name="Название">
                        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[length:var(--font\/font-size\/font-size_l,15px)] text-black text-ellipsis tracking-[-0.2115px] whitespace-nowrap" data-node-id="I40:29013;127:35361">
                          <p className="leading-[1.4] overflow-hidden text-[15px] text-ellipsis">05 Дагестан</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] h-full justify-center leading-[0] min-w-px not-italic relative text-[#313e78] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px]" data-node-id="I40:29013;127:35362">
                        <p className="leading-[1.4]">3</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[16px] left-0 rounded-[4px] top-[7px] w-[3px]" data-node-id="I40:29013;127:35365" />
              </div>
              <div className="bg-[#f8f8f8] content-stretch flex gap-[4px] items-center pr-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="40:29014" data-name="Пункты в master">
                <div className="content-stretch flex flex-[1_0_0] h-[31px] items-center min-w-px relative" data-node-id="I40:29014;127:35355" data-name="Content">
                  <div className="content-stretch flex flex-[1_0_0] gap-px h-full items-center min-w-px pl-[3px] relative" data-node-id="I40:29014;127:35356" data-name="Стрелка и текст">
                    <div className="content-stretch flex h-full items-start relative shrink-0 w-[12px]" data-node-id="I40:29014;127:35357">
                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-node-id="I40:29014;127:35358" data-name="_arrow">
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29014;127:35358;7571:22482" data-name="icons">
                          <div className="content-stretch flex flex-col items-center justify-center pb-[0.5px] relative shrink-0 size-[12px]" data-node-id="I40:29014;127:35358;7571:22482;5565:16633" data-name="Ui базовый набор / Font">
                            <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8991a9] text-[12px] whitespace-nowrap" data-node-id="I40:29014;127:35358;7571:22482;5565:16633;8306:1722">{`\uE96E`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-node-id="I40:29014;127:35359">
                      <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I40:29014;127:35360" data-name="Название">
                        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[length:var(--font\/font-size\/font-size_l,15px)] text-black text-ellipsis tracking-[-0.2115px] whitespace-nowrap" data-node-id="I40:29014;127:35361">
                          <p className="leading-[1.4] overflow-hidden text-[15px] text-ellipsis">06 Ингушетия</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] h-full justify-center leading-[0] min-w-px not-italic relative text-[#313e78] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px]" data-node-id="I40:29014;127:35362">
                        <p className="leading-[1.4]">3</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[16px] left-0 rounded-[4px] top-[7px] w-[3px]" data-node-id="I40:29014;127:35365" />
              </div>
              <div className="bg-[#f8f8f8] content-stretch flex gap-[4px] h-[31px] items-center pr-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="40:29015" data-name="Пункты в master">
                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-node-id="I40:29015;127:35355" data-name="Content">
                  <div className="content-stretch flex flex-[1_0_0] gap-px h-full items-center min-w-px pl-[3px] relative" data-node-id="I40:29015;127:35356" data-name="Стрелка и текст">
                    <div className="content-stretch flex h-full items-start relative shrink-0 w-[12px]" data-node-id="I40:29015;127:35357">
                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-node-id="I40:29015;127:35358" data-name="_arrow">
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29015;127:35358;7571:22482" data-name="icons">
                          <div className="content-stretch flex flex-col items-center justify-center pb-[0.5px] relative shrink-0 size-[12px]" data-node-id="I40:29015;127:35358;7571:22482;5565:16633" data-name="Ui базовый набор / Font">
                            <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8991a9] text-[12px] whitespace-nowrap" data-node-id="I40:29015;127:35358;7571:22482;5565:16633;8306:1722">{`\uE96E`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-node-id="I40:29015;127:35359">
                      <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I40:29015;127:35360" data-name="Название">
                        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[length:var(--font\/font-size\/font-size_l,15px)] text-black text-ellipsis tracking-[-0.2115px] whitespace-nowrap" data-node-id="I40:29015;127:35361">
                          <p className="leading-[1.4] overflow-hidden text-[15px] text-ellipsis">07 Кабардино-Балкария</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] h-full justify-center leading-[0] min-w-px not-italic relative text-[#313e78] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px]" data-node-id="I40:29015;127:35362">
                        <p className="leading-[1.4]">1</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[16px] left-0 rounded-[4px] top-[7px] w-[3px]" data-node-id="I40:29015;127:35365" />
              </div>
              <div className="bg-[#f8f8f8] content-stretch flex gap-[4px] h-[31px] items-center pr-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="40:29016" data-name="Пункты в master">
                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-node-id="I40:29016;127:35355" data-name="Content">
                  <div className="content-stretch flex flex-[1_0_0] gap-px h-full items-center min-w-px pl-[3px] relative" data-node-id="I40:29016;127:35356" data-name="Стрелка и текст">
                    <div className="content-stretch flex h-full items-start relative shrink-0 w-[12px]" data-node-id="I40:29016;127:35357">
                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-node-id="I40:29016;127:35358" data-name="_arrow">
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29016;127:35358;7571:22482" data-name="icons">
                          <div className="content-stretch flex flex-col items-center justify-center pb-[0.5px] relative shrink-0 size-[12px]" data-node-id="I40:29016;127:35358;7571:22482;5565:16633" data-name="Ui базовый набор / Font">
                            <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8991a9] text-[12px] whitespace-nowrap" data-node-id="I40:29016;127:35358;7571:22482;5565:16633;8306:1722">{`\uE96E`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-node-id="I40:29016;127:35359">
                      <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I40:29016;127:35360" data-name="Название">
                        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[length:var(--font\/font-size\/font-size_l,15px)] text-black text-ellipsis tracking-[-0.2115px] whitespace-nowrap" data-node-id="I40:29016;127:35361">
                          <p className="leading-[1.4] overflow-hidden text-[15px] text-ellipsis">08 Калмыкия</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] h-full justify-center leading-[0] min-w-px not-italic relative text-[#313e78] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px]" data-node-id="I40:29016;127:35362">
                        <p className="leading-[1.4]">4</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[16px] left-0 rounded-[4px] top-[7px] w-[3px]" data-node-id="I40:29016;127:35365" />
              </div>
              <div className="bg-[#f8f8f8] content-stretch flex gap-[4px] h-[31px] items-center pr-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="40:29017" data-name="Пункты в master">
                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-node-id="I40:29017;127:35355" data-name="Content">
                  <div className="content-stretch flex flex-[1_0_0] gap-px h-full items-center min-w-px pl-[3px] relative" data-node-id="I40:29017;127:35356" data-name="Стрелка и текст">
                    <div className="content-stretch flex h-full items-start relative shrink-0 w-[12px]" data-node-id="I40:29017;127:35357">
                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-node-id="I40:29017;127:35358" data-name="_arrow">
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29017;127:35358;7571:22482" data-name="icons">
                          <div className="content-stretch flex flex-col items-center justify-center pb-[0.5px] relative shrink-0 size-[12px]" data-node-id="I40:29017;127:35358;7571:22482;5565:16633" data-name="Ui базовый набор / Font">
                            <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8991a9] text-[12px] whitespace-nowrap" data-node-id="I40:29017;127:35358;7571:22482;5565:16633;8306:1722">{`\uE96E`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-node-id="I40:29017;127:35359">
                      <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I40:29017;127:35360" data-name="Название">
                        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[length:var(--font\/font-size\/font-size_l,15px)] text-black text-ellipsis tracking-[-0.2115px] whitespace-nowrap" data-node-id="I40:29017;127:35361">
                          <p className="leading-[1.4] overflow-hidden text-[15px] text-ellipsis">09 Карачаево-Черкессия</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] h-full justify-center leading-[0] min-w-px not-italic relative text-[#313e78] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px]" data-node-id="I40:29017;127:35362">
                        <p className="leading-[1.4]">3</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[16px] left-0 rounded-[4px] top-[7px] w-[3px]" data-node-id="I40:29017;127:35365" />
              </div>
              <div className="bg-[#f8f8f8] content-stretch flex gap-[4px] h-[31px] items-center pr-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="40:29018" data-name="Пункты в master">
                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-node-id="I40:29018;127:35355" data-name="Content">
                  <div className="content-stretch flex flex-[1_0_0] gap-px h-full items-center min-w-px pl-[3px] relative" data-node-id="I40:29018;127:35356" data-name="Стрелка и текст">
                    <div className="content-stretch flex h-full items-start relative shrink-0 w-[12px]" data-node-id="I40:29018;127:35357">
                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-node-id="I40:29018;127:35358" data-name="_arrow">
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29018;127:35358;7571:22482" data-name="icons">
                          <div className="content-stretch flex flex-col items-center justify-center pb-[0.5px] relative shrink-0 size-[12px]" data-node-id="I40:29018;127:35358;7571:22482;5565:16633" data-name="Ui базовый набор / Font">
                            <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8991a9] text-[12px] whitespace-nowrap" data-node-id="I40:29018;127:35358;7571:22482;5565:16633;8306:1722">{`\uE96E`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-node-id="I40:29018;127:35359">
                      <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I40:29018;127:35360" data-name="Название">
                        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[length:var(--font\/font-size\/font-size_l,15px)] text-black text-ellipsis tracking-[-0.2115px] whitespace-nowrap" data-node-id="I40:29018;127:35361">
                          <p className="leading-[1.4] overflow-hidden text-[15px] text-ellipsis">10 Карелия</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] h-full justify-center leading-[0] min-w-px not-italic relative text-[#313e78] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px]" data-node-id="I40:29018;127:35362">
                        <p className="leading-[1.4]">3</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[16px] left-0 rounded-[4px] top-[7px] w-[3px]" data-node-id="I40:29018;127:35365" />
              </div>
              <div className="bg-[#f8f8f8] content-stretch flex gap-[4px] h-[31px] items-center pr-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="40:29019" data-name="Пункты в master">
                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-node-id="I40:29019;127:35343" data-name="Content">
                  <div className="content-stretch flex flex-[1_0_0] gap-px h-full items-center min-w-px pl-[3px] relative" data-node-id="I40:29019;127:35344" data-name="Стрелка и текст">
                    <div className="content-stretch flex h-full items-start relative shrink-0 w-[12px]" data-node-id="I40:29019;127:35345">
                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-node-id="I40:29019;127:35346" data-name="_arrow">
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29019;127:35346;7571:22482" data-name="icons">
                          <div className="content-stretch flex flex-col items-center justify-center pb-[0.5px] relative shrink-0 size-[12px]" data-node-id="I40:29019;127:35346;7571:22482;5565:16633" data-name="Ui базовый набор / Font">
                            <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8991a9] text-[12px] whitespace-nowrap" data-node-id="I40:29019;127:35346;7571:22482;5565:16633;8306:1722">{`\uE96E`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-node-id="I40:29019;127:35347">
                      <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I40:29019;127:35348" data-name="Название">
                        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[length:var(--font\/font-size\/font-size_l,15px)] text-black text-ellipsis tracking-[-0.2115px] whitespace-nowrap" data-node-id="I40:29019;127:35349">
                          <p className="leading-[1.4] overflow-hidden text-[15px] text-ellipsis">11 Коми</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] h-full justify-center leading-[0] min-w-px not-italic relative text-[#313e78] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px]" data-node-id="I40:29019;127:35350">
                        <p className="leading-[1.4]">20</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[16px] left-0 rounded-[4px] top-[7px] w-[3px]" data-node-id="I40:29019;127:35353" />
              </div>
              <div className="bg-[#f8f8f8] content-stretch flex gap-[4px] h-[31px] items-center pr-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="127:18396" data-name="Пункты в master">
                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-node-id="I127:18396;127:35343" data-name="Content">
                  <div className="content-stretch flex flex-[1_0_0] gap-px h-full items-center min-w-px pl-[3px] relative" data-node-id="I127:18396;127:35344" data-name="Стрелка и текст">
                    <div className="content-stretch flex h-full items-start relative shrink-0 w-[12px]" data-node-id="I127:18396;127:35345">
                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-node-id="I127:18396;127:35346" data-name="_arrow">
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:18396;127:35346;7571:22482" data-name="icons">
                          <div className="content-stretch flex flex-col items-center justify-center pb-[0.5px] relative shrink-0 size-[12px]" data-node-id="I127:18396;127:35346;7571:22482;5565:16633" data-name="Ui базовый набор / Font">
                            <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8991a9] text-[12px] whitespace-nowrap" data-node-id="I127:18396;127:35346;7571:22482;5565:16633;8306:1722">{`\uE96E`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-node-id="I127:18396;127:35347">
                      <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I127:18396;127:35348" data-name="Название">
                        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[length:var(--font\/font-size\/font-size_l,15px)] text-black text-ellipsis tracking-[-0.2115px] whitespace-nowrap" data-node-id="I127:18396;127:35349">
                          <p className="leading-[1.4] overflow-hidden text-[15px] text-ellipsis">12 Марий Эл</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] h-full justify-center leading-[0] min-w-px not-italic relative text-[#313e78] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px]" data-node-id="I127:18396;127:35350">
                        <p className="leading-[1.4]">44</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[16px] left-0 rounded-[4px] top-[7px] w-[3px]" data-node-id="I127:18396;127:35353" />
              </div>
              <div className="bg-[#f8f8f8] content-stretch flex gap-[4px] h-[31px] items-center pr-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="127:18424" data-name="Пункты в master">
                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-node-id="I127:18424;127:35343" data-name="Content">
                  <div className="content-stretch flex flex-[1_0_0] gap-px h-full items-center min-w-px pl-[3px] relative" data-node-id="I127:18424;127:35344" data-name="Стрелка и текст">
                    <div className="content-stretch flex h-full items-start relative shrink-0 w-[12px]" data-node-id="I127:18424;127:35345">
                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-node-id="I127:18424;127:35346" data-name="_arrow">
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:18424;127:35346;7571:22482" data-name="icons">
                          <div className="content-stretch flex flex-col items-center justify-center pb-[0.5px] relative shrink-0 size-[12px]" data-node-id="I127:18424;127:35346;7571:22482;5565:16633" data-name="Ui базовый набор / Font">
                            <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8991a9] text-[12px] whitespace-nowrap" data-node-id="I127:18424;127:35346;7571:22482;5565:16633;8306:1722">{`\uE96E`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-node-id="I127:18424;127:35347">
                      <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I127:18424;127:35348" data-name="Название">
                        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[length:var(--font\/font-size\/font-size_l,15px)] text-black text-ellipsis tracking-[-0.2115px] whitespace-nowrap" data-node-id="I127:18424;127:35349">
                          <p className="leading-[1.4] overflow-hidden text-[15px] text-ellipsis">13 Мордовия</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] h-full justify-center leading-[0] min-w-px not-italic relative text-[#313e78] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px]" data-node-id="I127:18424;127:35350">
                        <p className="leading-[1.4]">31</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[16px] left-0 rounded-[4px] top-[7px] w-[3px]" data-node-id="I127:18424;127:35353" />
              </div>
              <div className="bg-[#f8f8f8] content-stretch flex gap-[4px] h-[31px] items-center pr-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="127:18452" data-name="Пункты в master">
                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-node-id="I127:18452;127:35343" data-name="Content">
                  <div className="content-stretch flex flex-[1_0_0] gap-px h-full items-center min-w-px pl-[3px] relative" data-node-id="I127:18452;127:35344" data-name="Стрелка и текст">
                    <div className="content-stretch flex h-full items-start relative shrink-0 w-[12px]" data-node-id="I127:18452;127:35345">
                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-node-id="I127:18452;127:35346" data-name="_arrow">
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:18452;127:35346;7571:22482" data-name="icons">
                          <div className="content-stretch flex flex-col items-center justify-center pb-[0.5px] relative shrink-0 size-[12px]" data-node-id="I127:18452;127:35346;7571:22482;5565:16633" data-name="Ui базовый набор / Font">
                            <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8991a9] text-[12px] whitespace-nowrap" data-node-id="I127:18452;127:35346;7571:22482;5565:16633;8306:1722">{`\uE96E`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-node-id="I127:18452;127:35347">
                      <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I127:18452;127:35348" data-name="Название">
                        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[length:var(--font\/font-size\/font-size_l,15px)] text-black text-ellipsis tracking-[-0.2115px] whitespace-nowrap" data-node-id="I127:18452;127:35349">
                          <p className="leading-[1.4] overflow-hidden text-[15px] text-ellipsis">14 Саха/Якутия</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] h-full justify-center leading-[0] min-w-px not-italic relative text-[#313e78] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px]" data-node-id="I127:18452;127:35350">
                        <p className="leading-[1.4]">51</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[16px] left-0 rounded-[4px] top-[7px] w-[3px]" data-node-id="I127:18452;127:35353" />
              </div>
              <div className="bg-[#f8f8f8] content-stretch flex gap-[4px] h-[31px] items-center pr-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="127:18480" data-name="Пункты в master">
                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-node-id="I127:18480;127:35343" data-name="Content">
                  <div className="content-stretch flex flex-[1_0_0] gap-px h-full items-center min-w-px pl-[3px] relative" data-node-id="I127:18480;127:35344" data-name="Стрелка и текст">
                    <div className="content-stretch flex h-full items-start relative shrink-0 w-[12px]" data-node-id="I127:18480;127:35345">
                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-node-id="I127:18480;127:35346" data-name="_arrow">
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:18480;127:35346;7571:22482" data-name="icons">
                          <div className="content-stretch flex flex-col items-center justify-center pb-[0.5px] relative shrink-0 size-[12px]" data-node-id="I127:18480;127:35346;7571:22482;5565:16633" data-name="Ui базовый набор / Font">
                            <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8991a9] text-[12px] whitespace-nowrap" data-node-id="I127:18480;127:35346;7571:22482;5565:16633;8306:1722">{`\uE96E`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-node-id="I127:18480;127:35347">
                      <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I127:18480;127:35348" data-name="Название">
                        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[length:var(--font\/font-size\/font-size_l,15px)] text-black text-ellipsis tracking-[-0.2115px] whitespace-nowrap" data-node-id="I127:18480;127:35349">
                          <p className="leading-[1.4] overflow-hidden text-[15px] text-ellipsis">15 Северная Осетия</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] h-full justify-center leading-[0] min-w-px not-italic relative text-[#313e78] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px]" data-node-id="I127:18480;127:35350">
                        <p className="leading-[1.4]">24</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[16px] left-0 rounded-[4px] top-[7px] w-[3px]" data-node-id="I127:18480;127:35353" />
              </div>
              <div className="bg-[#f8f8f8] content-stretch flex gap-[4px] h-[31px] items-center pr-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="127:18508" data-name="Пункты в master">
                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-node-id="I127:18508;127:35343" data-name="Content">
                  <div className="content-stretch flex flex-[1_0_0] gap-px h-full items-center min-w-px pl-[3px] relative" data-node-id="I127:18508;127:35344" data-name="Стрелка и текст">
                    <div className="content-stretch flex h-full items-start relative shrink-0 w-[12px]" data-node-id="I127:18508;127:35345">
                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-node-id="I127:18508;127:35346" data-name="_arrow">
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:18508;127:35346;7571:22482" data-name="icons">
                          <div className="content-stretch flex flex-col items-center justify-center pb-[0.5px] relative shrink-0 size-[12px]" data-node-id="I127:18508;127:35346;7571:22482;5565:16633" data-name="Ui базовый набор / Font">
                            <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8991a9] text-[12px] whitespace-nowrap" data-node-id="I127:18508;127:35346;7571:22482;5565:16633;8306:1722">{`\uE96E`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-node-id="I127:18508;127:35347">
                      <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I127:18508;127:35348" data-name="Название">
                        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[length:var(--font\/font-size\/font-size_l,15px)] text-black text-ellipsis tracking-[-0.2115px] whitespace-nowrap" data-node-id="I127:18508;127:35349">
                          <p className="leading-[1.4] overflow-hidden text-[15px] text-ellipsis">16 Татарстан</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] h-full justify-center leading-[0] min-w-px not-italic relative text-[#313e78] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px]" data-node-id="I127:18508;127:35350">
                        <p className="leading-[1.4]">20</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[16px] left-0 rounded-[4px] top-[7px] w-[3px]" data-node-id="I127:18508;127:35353" />
              </div>
              <div className="bg-[#f8f8f8] content-stretch flex gap-[4px] h-[31px] items-center pr-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="127:18536" data-name="Пункты в master">
                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-node-id="I127:18536;127:35343" data-name="Content">
                  <div className="content-stretch flex flex-[1_0_0] gap-px h-full items-center min-w-px pl-[3px] relative" data-node-id="I127:18536;127:35344" data-name="Стрелка и текст">
                    <div className="content-stretch flex h-full items-start relative shrink-0 w-[12px]" data-node-id="I127:18536;127:35345">
                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-node-id="I127:18536;127:35346" data-name="_arrow">
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:18536;127:35346;7571:22482" data-name="icons">
                          <div className="content-stretch flex flex-col items-center justify-center pb-[0.5px] relative shrink-0 size-[12px]" data-node-id="I127:18536;127:35346;7571:22482;5565:16633" data-name="Ui базовый набор / Font">
                            <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8991a9] text-[12px] whitespace-nowrap" data-node-id="I127:18536;127:35346;7571:22482;5565:16633;8306:1722">{`\uE96E`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-node-id="I127:18536;127:35347">
                      <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I127:18536;127:35348" data-name="Название">
                        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[length:var(--font\/font-size\/font-size_l,15px)] text-black text-ellipsis tracking-[-0.2115px] whitespace-nowrap" data-node-id="I127:18536;127:35349">
                          <p className="leading-[1.4] overflow-hidden text-[15px] text-ellipsis">17 Тыва</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] h-full justify-center leading-[0] min-w-px not-italic relative text-[#313e78] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px]" data-node-id="I127:18536;127:35350">
                        <p className="leading-[1.4]">32</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[16px] left-0 rounded-[4px] top-[7px] w-[3px]" data-node-id="I127:18536;127:35353" />
              </div>
              <div className="bg-[#f8f8f8] content-stretch flex gap-[4px] h-[31px] items-center pr-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="127:18564" data-name="Пункты в master">
                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-node-id="I127:18564;127:35343" data-name="Content">
                  <div className="content-stretch flex flex-[1_0_0] gap-px h-full items-center min-w-px pl-[3px] relative" data-node-id="I127:18564;127:35344" data-name="Стрелка и текст">
                    <div className="content-stretch flex h-full items-start relative shrink-0 w-[12px]" data-node-id="I127:18564;127:35345">
                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-node-id="I127:18564;127:35346" data-name="_arrow">
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:18564;127:35346;7571:22482" data-name="icons">
                          <div className="content-stretch flex flex-col items-center justify-center pb-[0.5px] relative shrink-0 size-[12px]" data-node-id="I127:18564;127:35346;7571:22482;5565:16633" data-name="Ui базовый набор / Font">
                            <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8991a9] text-[12px] whitespace-nowrap" data-node-id="I127:18564;127:35346;7571:22482;5565:16633;8306:1722">{`\uE96E`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-node-id="I127:18564;127:35347">
                      <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I127:18564;127:35348" data-name="Название">
                        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[length:var(--font\/font-size\/font-size_l,15px)] text-black text-ellipsis tracking-[-0.2115px] whitespace-nowrap" data-node-id="I127:18564;127:35349">
                          <p className="leading-[1.4] overflow-hidden text-[15px] text-ellipsis">18 Удмуртия</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] h-full justify-center leading-[0] min-w-px not-italic relative text-[#313e78] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px]" data-node-id="I127:18564;127:35350">
                        <p className="leading-[1.4]">65</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[16px] left-0 rounded-[4px] top-[7px] w-[3px]" data-node-id="I127:18564;127:35353" />
              </div>
              <div className="bg-[#f8f8f8] content-stretch flex gap-[4px] h-[31px] items-center pr-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="127:18592" data-name="Пункты в master">
                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-node-id="I127:18592;127:35343" data-name="Content">
                  <div className="content-stretch flex flex-[1_0_0] gap-px h-full items-center min-w-px pl-[3px] relative" data-node-id="I127:18592;127:35344" data-name="Стрелка и текст">
                    <div className="content-stretch flex h-full items-start relative shrink-0 w-[12px]" data-node-id="I127:18592;127:35345">
                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-node-id="I127:18592;127:35346" data-name="_arrow">
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:18592;127:35346;7571:22482" data-name="icons">
                          <div className="content-stretch flex flex-col items-center justify-center pb-[0.5px] relative shrink-0 size-[12px]" data-node-id="I127:18592;127:35346;7571:22482;5565:16633" data-name="Ui базовый набор / Font">
                            <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8991a9] text-[12px] whitespace-nowrap" data-node-id="I127:18592;127:35346;7571:22482;5565:16633;8306:1722">{`\uE96E`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-node-id="I127:18592;127:35347">
                      <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I127:18592;127:35348" data-name="Название">
                        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[length:var(--font\/font-size\/font-size_l,15px)] text-black text-ellipsis tracking-[-0.2115px] whitespace-nowrap" data-node-id="I127:18592;127:35349">
                          <p className="leading-[1.4] overflow-hidden text-[15px] text-ellipsis">19 Хакасия</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] h-full justify-center leading-[0] min-w-px not-italic relative text-[#313e78] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px]" data-node-id="I127:18592;127:35350">
                        <p className="leading-[1.4]">20</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[16px] left-0 rounded-[4px] top-[7px] w-[3px]" data-node-id="I127:18592;127:35353" />
              </div>
              <div className="bg-[#f8f8f8] content-stretch flex gap-[4px] h-[31px] items-center pr-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="127:18620" data-name="Пункты в master">
                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-node-id="I127:18620;127:35343" data-name="Content">
                  <div className="content-stretch flex flex-[1_0_0] gap-px h-full items-center min-w-px pl-[3px] relative" data-node-id="I127:18620;127:35344" data-name="Стрелка и текст">
                    <div className="content-stretch flex h-full items-start relative shrink-0 w-[12px]" data-node-id="I127:18620;127:35345">
                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-node-id="I127:18620;127:35346" data-name="_arrow">
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:18620;127:35346;7571:22482" data-name="icons">
                          <div className="content-stretch flex flex-col items-center justify-center pb-[0.5px] relative shrink-0 size-[12px]" data-node-id="I127:18620;127:35346;7571:22482;5565:16633" data-name="Ui базовый набор / Font">
                            <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8991a9] text-[12px] whitespace-nowrap" data-node-id="I127:18620;127:35346;7571:22482;5565:16633;8306:1722">{`\uE96E`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-node-id="I127:18620;127:35347">
                      <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I127:18620;127:35348" data-name="Название">
                        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[length:var(--font\/font-size\/font-size_l,15px)] text-black text-ellipsis tracking-[-0.2115px] whitespace-nowrap" data-node-id="I127:18620;127:35349">
                          <p className="leading-[1.4] overflow-hidden text-[15px] text-ellipsis">20 Чечня</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] h-full justify-center leading-[0] min-w-px not-italic relative text-[#313e78] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px]" data-node-id="I127:18620;127:35350">
                        <p className="leading-[1.4]">89</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[16px] left-0 rounded-[4px] top-[7px] w-[3px]" data-node-id="I127:18620;127:35353" />
              </div>
              <div className="bg-[#f8f8f8] content-stretch flex gap-[4px] h-[31px] items-center pr-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="127:18648" data-name="Пункты в master">
                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-node-id="I127:18648;127:35343" data-name="Content">
                  <div className="content-stretch flex flex-[1_0_0] gap-px h-full items-center min-w-px pl-[3px] relative" data-node-id="I127:18648;127:35344" data-name="Стрелка и текст">
                    <div className="content-stretch flex h-full items-start relative shrink-0 w-[12px]" data-node-id="I127:18648;127:35345">
                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-node-id="I127:18648;127:35346" data-name="_arrow">
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:18648;127:35346;7571:22482" data-name="icons">
                          <div className="content-stretch flex flex-col items-center justify-center pb-[0.5px] relative shrink-0 size-[12px]" data-node-id="I127:18648;127:35346;7571:22482;5565:16633" data-name="Ui базовый набор / Font">
                            <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8991a9] text-[12px] whitespace-nowrap" data-node-id="I127:18648;127:35346;7571:22482;5565:16633;8306:1722">{`\uE96E`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-node-id="I127:18648;127:35347">
                      <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I127:18648;127:35348" data-name="Название">
                        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[length:var(--font\/font-size\/font-size_l,15px)] text-black text-ellipsis tracking-[-0.2115px] whitespace-nowrap" data-node-id="I127:18648;127:35349">
                          <p className="leading-[1.4] overflow-hidden text-[15px] text-ellipsis">21 Чувашия</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] h-full justify-center leading-[0] min-w-px not-italic relative text-[#313e78] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px]" data-node-id="I127:18648;127:35350">
                        <p className="leading-[1.4]">20</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[16px] left-0 rounded-[4px] top-[7px] w-[3px]" data-node-id="I127:18648;127:35353" />
              </div>
              <div className="bg-[#f8f8f8] content-stretch flex gap-[4px] h-[31px] items-center pr-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="127:18676" data-name="Пункты в master">
                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-node-id="I127:18676;127:35343" data-name="Content">
                  <div className="content-stretch flex flex-[1_0_0] gap-px h-full items-center min-w-px pl-[3px] relative" data-node-id="I127:18676;127:35344" data-name="Стрелка и текст">
                    <div className="content-stretch flex h-full items-start relative shrink-0 w-[12px]" data-node-id="I127:18676;127:35345">
                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-node-id="I127:18676;127:35346" data-name="_arrow">
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:18676;127:35346;7571:22482" data-name="icons">
                          <div className="content-stretch flex flex-col items-center justify-center pb-[0.5px] relative shrink-0 size-[12px]" data-node-id="I127:18676;127:35346;7571:22482;5565:16633" data-name="Ui базовый набор / Font">
                            <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8991a9] text-[12px] whitespace-nowrap" data-node-id="I127:18676;127:35346;7571:22482;5565:16633;8306:1722">{`\uE96E`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-node-id="I127:18676;127:35347">
                      <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I127:18676;127:35348" data-name="Название">
                        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[length:var(--font\/font-size\/font-size_l,15px)] text-black text-ellipsis tracking-[-0.2115px] whitespace-nowrap" data-node-id="I127:18676;127:35349">
                          <p className="leading-[1.4] overflow-hidden text-[15px] text-ellipsis">22 Алтайский край</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] h-full justify-center leading-[0] min-w-px not-italic relative text-[#313e78] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px]" data-node-id="I127:18676;127:35350">
                        <p className="leading-[1.4]">20</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[16px] left-0 rounded-[4px] top-[7px] w-[3px]" data-node-id="I127:18676;127:35353" />
              </div>
              <div className="bg-[#f8f8f8] content-stretch flex gap-[4px] h-[31px] items-center pr-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="127:18704" data-name="Пункты в master">
                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-node-id="I127:18704;127:35343" data-name="Content">
                  <div className="content-stretch flex flex-[1_0_0] gap-px h-full items-center min-w-px pl-[3px] relative" data-node-id="I127:18704;127:35344" data-name="Стрелка и текст">
                    <div className="content-stretch flex h-full items-start relative shrink-0 w-[12px]" data-node-id="I127:18704;127:35345">
                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-node-id="I127:18704;127:35346" data-name="_arrow">
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:18704;127:35346;7571:22482" data-name="icons">
                          <div className="content-stretch flex flex-col items-center justify-center pb-[0.5px] relative shrink-0 size-[12px]" data-node-id="I127:18704;127:35346;7571:22482;5565:16633" data-name="Ui базовый набор / Font">
                            <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8991a9] text-[12px] whitespace-nowrap" data-node-id="I127:18704;127:35346;7571:22482;5565:16633;8306:1722">{`\uE96E`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-node-id="I127:18704;127:35347">
                      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-node-id="I127:18704;127:35348" data-name="Название">
                        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] min-w-px not-italic relative text-[length:var(--font\/font-size\/font-size_l,15px)] text-black tracking-[-0.2115px]" data-node-id="I127:18704;127:35349">
                          <p className="leading-[1.4]">23 Краснодарский край</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[#313e78] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px] whitespace-nowrap" data-node-id="I127:18704;127:35350">
                        <p className="leading-[1.4]">235</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[16px] left-0 rounded-[4px] top-[7px] w-[3px]" data-node-id="I127:18704;127:35353" />
              </div>
              <div className="bg-[#f8f8f8] content-stretch flex gap-[4px] h-[31px] items-center pr-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="127:18732" data-name="Пункты в master">
                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-node-id="I127:18732;127:35343" data-name="Content">
                  <div className="content-stretch flex flex-[1_0_0] gap-px h-full items-center min-w-px pl-[3px] relative" data-node-id="I127:18732;127:35344" data-name="Стрелка и текст">
                    <div className="content-stretch flex h-full items-start relative shrink-0 w-[12px]" data-node-id="I127:18732;127:35345">
                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-node-id="I127:18732;127:35346" data-name="_arrow">
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:18732;127:35346;7571:22482" data-name="icons">
                          <div className="content-stretch flex flex-col items-center justify-center pb-[0.5px] relative shrink-0 size-[12px]" data-node-id="I127:18732;127:35346;7571:22482;5565:16633" data-name="Ui базовый набор / Font">
                            <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8991a9] text-[12px] whitespace-nowrap" data-node-id="I127:18732;127:35346;7571:22482;5565:16633;8306:1722">{`\uE96E`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-node-id="I127:18732;127:35347">
                      <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I127:18732;127:35348" data-name="Название">
                        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[length:var(--font\/font-size\/font-size_l,15px)] text-black text-ellipsis tracking-[-0.2115px] whitespace-nowrap" data-node-id="I127:18732;127:35349">
                          <p className="leading-[1.4] overflow-hidden text-[15px] text-ellipsis">24 Красноярский край</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] h-full justify-center leading-[0] min-w-px not-italic relative text-[#313e78] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px]" data-node-id="I127:18732;127:35350">
                        <p className="leading-[1.4]">136</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[16px] left-0 rounded-[4px] top-[7px] w-[3px]" data-node-id="I127:18732;127:35353" />
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip relative rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_0px_var(--blur\/shadow-blur_c,8px)_0px_var(--color\/shadow-color_c,rgba(0,0,0,0.06))]" data-node-id="40:29176" data-name="Detail">
            <div className="[word-break:break-word] content-stretch flex font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] gap-[12px] items-start justify-end leading-[normal] not-italic pr-[12px] py-[6px] relative shrink-0 text-[12px] text-[color:var(--text\/label_text-color,#8991a9)] tracking-[-0.1692px] w-full whitespace-nowrap" data-node-id="40:29479">
              <p className="overflow-hidden relative shrink-0 text-ellipsis w-[146px]" data-node-id="337:17274">
                Последнее посещение
              </p>
              <p className="overflow-hidden relative shrink-0 text-ellipsis w-[146px]" data-node-id="40:29481">
                Посетители
              </p>
              <p className="overflow-hidden relative shrink-0 text-ellipsis w-[146px]" data-node-id="40:29482">
                Отклики
              </p>
              <p className="overflow-hidden relative shrink-0 text-ellipsis text-right w-[146px]" data-node-id="337:17281">
                Шаблон
              </p>
            </div>
            <div className="bg-[var(--background\/background-color,white)] content-stretch flex gap-[12px] items-start overflow-clip pb-[3px] pr-[12px] relative shrink-0 w-full" data-node-id="40:29194" data-name="Запись списка">
              <div className="content-stretch flex items-start relative shrink-0 w-[350px]" data-node-id="I40:29194;39:23329">
                <Checkbox1 captionVisible={false} className="content-stretch flex items-start opacity-0 relative shrink-0" />
                <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] items-start leading-[normal] not-italic pt-[4px] relative shrink-0 w-[268px] whitespace-nowrap" data-node-id="I40:29194;39:22642">
                  <div className="content-stretch flex gap-[8px] items-baseline relative shrink-0 w-full" data-node-id="I40:29194;39:22641">
                    <p className="relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px]" data-node-id="I40:29194;39:22632">
                      Эстетика
                    </p>
                    <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] text-ellipsis tracking-[-0.1692px]" data-node-id="I40:29194;39:22640">
                      г. Майкоп, ул. Гоголя, д. 28
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] w-full" data-node-id="I40:29194;39:22639">
                    <p className="max-w-[300px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis" data-node-id="I40:29194;39:22635">
                      Салон Красоты “Эстетика”, ООО,
                    </p>
                    <p className="relative shrink-0 text-[length:var(--font\/font-size\/font-size_xs,12px)]" data-node-id="I40:29194;39:22638">
                      7869940941
                    </p>
                  </div>
                </div>
                <div className="absolute content-stretch flex h-[var(--icon\/icon_size\/icon-size_m,24px)] items-center left-0 overflow-clip pb-[var(--offset\/offset_3xs,2px)] top-0" data-node-id="I40:29194;39:23344" data-name="marker/Marker">
                  <div className="bg-[var(--extra\/marker_color,#cc3d00)] h-[16px] relative rounded-[var(--border-radius\/border-radius_2xs,4px)] shrink-0 w-[3px]" data-node-id="I40:29194;39:23344;18419:396" data-name="marker" />
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center pt-[4px] relative shrink-0 w-[72px]" data-node-id="I40:29194;39:23383">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[16px]" data-node-id="I40:29194;39:22732" data-name="Проверено админом">
                  <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic opacity-0 relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] w-full" data-node-id="I40:29194;39:22730">{`\uEB4D`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] gap-[12px] items-start justify-end leading-[normal] min-w-px not-italic pt-[6px] relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] whitespace-nowrap" data-node-id="I40:29194;39:23384">
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I40:29194;39:22725">
                  4 сен
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I40:29194;39:22727">
                  6 678
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px opacity-0 overflow-hidden relative text-ellipsis" data-node-id="I40:29194;39:22728">
                  2
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis text-right" data-node-id="I40:29194;39:22729">
                  Услуги
                </p>
              </div>
              <div className="absolute bg-[var(--background\/hover_background-color,#f3f4f8)] bottom-0 content-stretch flex gap-[var(--offset\/offset_xs,6px)] items-end justify-end opacity-0 pb-[3px] pt-[4px] px-[var(--offset\/offset_xs,6px)] right-0" data-node-id="I40:29194;40:30221" data-name="Command">
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I40:29194;40:30226" data-name="Удалить">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29194;40:30226;13973:4084" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29194;40:30226;13973:4084;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I40:29194;40:30226;13973:4084;12337:7243;5565:16627" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/danger_icon-color,#c2140a)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" data-node-id="I40:29194;40:30226;13973:4084;12337:7243;5565:16627;8306:1722">{`\uE65C`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--background\/background-color,white)] content-stretch flex gap-[12px] items-start overflow-clip pb-[3px] pr-[12px] relative shrink-0 w-full" data-node-id="40:29231" data-name="Запись списка">
              <div className="content-stretch flex items-start relative shrink-0 w-[350px]" data-node-id="I40:29231;39:23329">
                <Checkbox1 captionVisible={false} className="content-stretch flex items-start opacity-0 relative shrink-0" />
                <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] items-start leading-[normal] not-italic pt-[4px] relative shrink-0 w-[268px] whitespace-nowrap" data-node-id="I40:29231;39:22642">
                  <div className="content-stretch flex gap-[8px] items-baseline relative shrink-0 w-full" data-node-id="I40:29231;39:22641">
                    <p className="relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px]" data-node-id="I40:29231;39:22632">
                      Кот в сапогах
                    </p>
                    <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] text-ellipsis tracking-[-0.1692px]" data-node-id="I40:29231;39:22640">
                      Республика Адыгея, Энем, улица 68-й Морской Бригады, д. 12
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] w-full" data-node-id="I40:29231;39:22639">
                    <p className="max-w-[300px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis" data-node-id="I40:29231;39:22635">
                      Бергер Пеинтс Оверсис Лимитед, ООО,
                    </p>
                    <p className="relative shrink-0 text-[length:var(--font\/font-size\/font-size_xs,12px)]" data-node-id="I40:29231;39:22638">
                      7819643568
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center pt-[4px] relative shrink-0 w-[72px]" data-node-id="I40:29231;39:23383">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[16px]" data-node-id="I40:29231;39:22732" data-name="Проверено админом">
                  <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic opacity-0 relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] w-full" data-node-id="I40:29231;39:22730">{`\uEB4D`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] gap-[12px] items-start justify-end leading-[normal] min-w-px not-italic pt-[6px] relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] whitespace-nowrap" data-node-id="I40:29231;39:23384">
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I40:29231;39:22725">
                  4 сен
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I40:29231;39:22727">
                  12
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px opacity-0 overflow-hidden relative text-ellipsis" data-node-id="I40:29231;39:22728">
                  2
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis text-right" data-node-id="I40:29231;39:22729">
                  Доставка из ресторана
                </p>
              </div>
              <div className="absolute bg-[var(--background\/hover_background-color,#f3f4f8)] bottom-0 content-stretch flex gap-[var(--offset\/offset_xs,6px)] items-end justify-end opacity-0 pb-[3px] pt-[4px] px-[var(--offset\/offset_xs,6px)] right-0" data-node-id="I40:29231;40:30221" data-name="Command">
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I40:29231;40:30226" data-name="Удалить">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29231;40:30226;13973:4084" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29231;40:30226;13973:4084;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I40:29231;40:30226;13973:4084;12337:7243;5565:16627" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/danger_icon-color,#c2140a)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" data-node-id="I40:29231;40:30226;13973:4084;12337:7243;5565:16627;8306:1722">{`\uE65C`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a className="bg-[var(--background\/background-color,white)] content-stretch cursor-pointer flex gap-[12px] h-[31px] items-start overflow-clip pb-[3px] pr-[12px] relative shrink-0 w-full" data-node-id="110:24731" data-name="Запись списка">
              <div className="content-stretch flex h-full items-center relative shrink-0 w-[350px]" data-node-id="I110:24731;39:23329">
                <Checkbox1 captionVisible={false} className="content-stretch flex items-start opacity-0 relative shrink-0" />
                <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-[268px]" data-node-id="I110:24731;39:22642">
                  <div className="content-stretch flex gap-[8px] items-baseline relative shrink-0 w-full" data-node-id="I110:24731;39:22641">
                    <p className="[word-break:break-word] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] leading-[normal] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_l,15px)] text-left tracking-[-0.2115px] whitespace-nowrap" data-node-id="I110:24731;39:22632">
                      Биллинговые системы
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center pt-[4px] relative shrink-0 w-[72px]" data-node-id="I110:24731;39:23383">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[16px]" data-node-id="I110:24731;39:22732" data-name="Проверено админом">
                  <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic opacity-0 relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] text-left w-full" data-node-id="I110:24731;39:22730">{`\uEB4D`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] gap-[12px] items-start justify-end leading-[normal] min-w-px not-italic pt-[6px] relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] whitespace-nowrap" data-node-id="I110:24731;39:23384">
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis text-left" data-node-id="I110:24731;39:22725">
                  4 сен
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis text-left" data-node-id="I110:24731;39:22727">
                  12
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px opacity-0 overflow-hidden relative text-ellipsis text-left" data-node-id="I110:24731;39:22728">
                  2
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis text-right" data-node-id="I110:24731;39:22729">
                  Доставка из ресторана
                </p>
              </div>
              <div className="absolute bg-[var(--background\/hover_background-color,#f3f4f8)] bottom-0 content-stretch flex gap-[var(--offset\/offset_xs,6px)] items-end justify-end opacity-0 pb-[3px] pt-[4px] px-[var(--offset\/offset_xs,6px)] right-0" data-node-id="I110:24731;40:30221" data-name="Command">
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I110:24731;40:30222" data-name="публикация">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I110:24731;40:30222;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I110:24731;40:30222;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I110:24731;40:30222;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] text-left whitespace-nowrap" data-node-id="I110:24731;40:30222;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE62F`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I110:24731;40:30226" data-name="Удалить">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I110:24731;40:30226;13973:4084" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I110:24731;40:30226;13973:4084;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I110:24731;40:30226;13973:4084;12337:7243;5565:16627" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/danger_icon-color,#c2140a)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] text-left whitespace-nowrap" data-node-id="I110:24731;40:30226;13973:4084;12337:7243;5565:16627;8306:1722">{`\uE65C`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I110:24731;40:30227" data-name="3 точки">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I110:24731;40:30227;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I110:24731;40:30227;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I110:24731;40:30227;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] text-left whitespace-nowrap" data-node-id="I110:24731;40:30227;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE9D9`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a className="bg-[var(--background\/background-color,white)] content-stretch cursor-pointer flex gap-[12px] h-[31px] items-start overflow-clip pb-[3px] pr-[12px] relative shrink-0 w-full" data-node-id="127:16713" data-name="Запись списка">
              <div className="content-stretch flex h-full items-center relative shrink-0 w-[350px]" data-node-id="I127:16713;39:23329">
                <Checkbox1 captionVisible={false} className="content-stretch flex items-start opacity-0 relative shrink-0" />
                <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-[268px]" data-node-id="I127:16713;39:22642">
                  <div className="content-stretch flex gap-[8px] items-baseline relative shrink-0 w-full" data-node-id="I127:16713;39:22641">
                    <p className="[word-break:break-word] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] leading-[normal] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_l,15px)] text-left tracking-[-0.2115px] whitespace-pre" data-node-id="I127:16713;39:22632">{`Биллинговые системы  2.0`}</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center pt-[4px] relative shrink-0 w-[72px]" data-node-id="I127:16713;39:23383">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[16px]" data-node-id="I127:16713;39:22732" data-name="Проверено админом">
                  <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic opacity-0 relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] text-left w-full" data-node-id="I127:16713;39:22730">{`\uEB4D`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] gap-[12px] items-start justify-end leading-[normal] min-w-px not-italic pt-[6px] relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] whitespace-nowrap" data-node-id="I127:16713;39:23384">
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis text-left" data-node-id="I127:16713;39:22725">
                  4 сен
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis text-left" data-node-id="I127:16713;39:22727">
                  2
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px opacity-0 overflow-hidden relative text-ellipsis text-left" data-node-id="I127:16713;39:22728">
                  2
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis text-right" data-node-id="I127:16713;39:22729">
                  Доставка из ресторана
                </p>
              </div>
              <div className="absolute bg-[var(--background\/hover_background-color,#f3f4f8)] bottom-0 content-stretch flex gap-[var(--offset\/offset_xs,6px)] items-end justify-end opacity-0 pb-[3px] pt-[4px] px-[var(--offset\/offset_xs,6px)] right-0" data-node-id="I127:16713;40:30221" data-name="Command">
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I127:16713;40:30222" data-name="публикация">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I127:16713;40:30222;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:16713;40:30222;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I127:16713;40:30222;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] text-left whitespace-nowrap" data-node-id="I127:16713;40:30222;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE62F`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I127:16713;40:30226" data-name="Удалить">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I127:16713;40:30226;13973:4084" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:16713;40:30226;13973:4084;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I127:16713;40:30226;13973:4084;12337:7243;5565:16627" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/danger_icon-color,#c2140a)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] text-left whitespace-nowrap" data-node-id="I127:16713;40:30226;13973:4084;12337:7243;5565:16627;8306:1722">{`\uE65C`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I127:16713;40:30227" data-name="3 точки">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I127:16713;40:30227;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:16713;40:30227;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I127:16713;40:30227;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] text-left whitespace-nowrap" data-node-id="I127:16713;40:30227;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE9D9`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div className="bg-[var(--background\/background-color,white)] content-stretch flex gap-[12px] items-start overflow-clip pb-[3px] pr-[12px] relative shrink-0 w-full" data-node-id="40:29266" data-name="Запись списка">
              <div className="content-stretch flex items-start relative shrink-0 w-[350px]" data-node-id="I40:29266;39:23329">
                <Checkbox1 captionVisible={false} className="content-stretch flex items-start opacity-0 relative shrink-0" />
                <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] items-start leading-[normal] not-italic pt-[4px] relative shrink-0 w-[268px] whitespace-nowrap" data-node-id="I40:29266;39:22642">
                  <div className="content-stretch flex gap-[8px] items-baseline relative shrink-0 w-full" data-node-id="I40:29266;39:22641">
                    <p className="relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px]" data-node-id="I40:29266;39:22632">
                      Озеры
                    </p>
                    <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] text-ellipsis tracking-[-0.1692px]" data-node-id="I40:29266;39:22640">
                      г. Майкоп, ул. Гоголя, д. 28
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] w-full" data-node-id="I40:29266;39:22639">
                    <p className="max-w-[300px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis" data-node-id="I40:29266;39:22635">{`Детский Сад № 20 "Ромашка", МБДОУ,`}</p>
                    <p className="relative shrink-0 text-[length:var(--font\/font-size\/font-size_xs,12px)]" data-node-id="I40:29266;39:22638">
                      9187654308
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center pt-[4px] relative shrink-0 w-[72px]" data-node-id="I40:29266;39:23383">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[16px]" data-node-id="I40:29266;39:22732" data-name="Проверено админом">
                  <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic opacity-0 relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] w-full" data-node-id="I40:29266;39:22730">{`\uEB4D`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] gap-[12px] items-start justify-end leading-[normal] min-w-px not-italic pt-[6px] relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] whitespace-nowrap" data-node-id="I40:29266;39:23384">
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I40:29266;39:22725">
                  3 сен
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I40:29266;39:22727">
                  125
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px opacity-0 overflow-hidden relative text-ellipsis" data-node-id="I40:29266;39:22728">
                  2
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis text-right" data-node-id="I40:29266;39:22729">
                  Услуги
                </p>
              </div>
              <div className="absolute bg-[var(--background\/hover_background-color,#f3f4f8)] bottom-0 content-stretch flex gap-[var(--offset\/offset_xs,6px)] items-end justify-end opacity-0 pb-[3px] pt-[4px] px-[var(--offset\/offset_xs,6px)] right-0" data-node-id="I40:29266;40:30221" data-name="Command">
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I40:29266;40:30226" data-name="Удалить">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29266;40:30226;13973:4084" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29266;40:30226;13973:4084;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I40:29266;40:30226;13973:4084;12337:7243;5565:16627" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/danger_icon-color,#c2140a)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" data-node-id="I40:29266;40:30226;13973:4084;12337:7243;5565:16627;8306:1722">{`\uE65C`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--background\/background-color,white)] content-stretch flex gap-[12px] items-start overflow-clip pb-[3px] pr-[12px] relative shrink-0 w-full" data-node-id="40:29301" data-name="Запись списка">
              <div className="content-stretch flex items-start relative shrink-0 w-[350px]" data-node-id="I40:29301;39:23329">
                <Checkbox1 captionVisible={false} className="content-stretch flex items-start opacity-0 relative shrink-0" />
                <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] items-start leading-[normal] not-italic pt-[4px] relative shrink-0 w-[268px] whitespace-nowrap" data-node-id="I40:29301;39:22642">
                  <div className="content-stretch flex gap-[8px] items-baseline relative shrink-0 w-full" data-node-id="I40:29301;39:22641">
                    <p className="relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px]" data-node-id="I40:29301;39:22632">
                      Виктория
                    </p>
                    <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] text-ellipsis tracking-[-0.1692px]" data-node-id="I40:29301;39:22640">
                      Респ. Адыгея, Тахтамукайский р-н, пгт. Энем, ул. Перова, д. 36, к. 1
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] w-full" data-node-id="I40:29301;39:22639">
                    <p className="max-w-[300px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis" data-node-id="I40:29301;39:22635">{`ФБУЗ "Центр Гигиены И Эпидемиологии В Республике Адыгея", ФГБУ,`}</p>
                    <p className="relative shrink-0 text-[length:var(--font\/font-size\/font-size_xs,12px)]" data-node-id="I40:29301;39:22638">
                      1902637489
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center pt-[4px] relative shrink-0 w-[72px]" data-node-id="I40:29301;39:23383">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[16px]" data-node-id="I40:29301;39:22732" data-name="Проверено админом">
                  <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] w-full" data-node-id="I40:29301;39:22730">{`\uEB4D`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] gap-[12px] items-start justify-end leading-[normal] min-w-px not-italic pt-[6px] relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] whitespace-nowrap" data-node-id="I40:29301;39:23384">
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I40:29301;39:22725">
                  3 сен
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I40:29301;39:22727">
                  390
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I40:29301;39:22728">
                  2
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis text-right" data-node-id="I40:29301;39:22729">
                  Услуги
                </p>
              </div>
              <div className="absolute bg-[var(--background\/hover_background-color,#f3f4f8)] bottom-0 content-stretch flex gap-[var(--offset\/offset_xs,6px)] items-end justify-end opacity-0 pb-[3px] pt-[4px] px-[var(--offset\/offset_xs,6px)] right-0" data-node-id="I40:29301;40:30221" data-name="Command">
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I40:29301;40:30222" data-name="публикация">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29301;40:30222;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29301;40:30222;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I40:29301;40:30222;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I40:29301;40:30222;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE62F`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I40:29301;40:30226" data-name="Удалить">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29301;40:30226;13973:4084" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29301;40:30226;13973:4084;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I40:29301;40:30226;13973:4084;12337:7243;5565:16627" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/danger_icon-color,#c2140a)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" data-node-id="I40:29301;40:30226;13973:4084;12337:7243;5565:16627;8306:1722">{`\uE65C`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I40:29301;40:30227" data-name="3 точки">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29301;40:30227;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29301;40:30227;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I40:29301;40:30227;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I40:29301;40:30227;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE9D9`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--background\/background-color,white)] content-stretch flex gap-[12px] items-start overflow-clip pb-[3px] pr-[12px] relative shrink-0 w-full" data-node-id="40:29336" data-name="Запись списка">
              <div className="content-stretch flex items-start relative shrink-0 w-[350px]" data-node-id="I40:29336;39:23329">
                <Checkbox1 captionVisible={false} className="content-stretch flex items-start opacity-0 relative shrink-0" />
                <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] items-start leading-[normal] not-italic pt-[4px] relative shrink-0 w-[268px] whitespace-nowrap" data-node-id="I40:29336;39:22642">
                  <div className="content-stretch flex gap-[8px] items-baseline relative shrink-0 w-full" data-node-id="I40:29336;39:22641">
                    <p className="relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px]" data-node-id="I40:29336;39:22632">
                      “Дом моды”
                    </p>
                    <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] text-ellipsis tracking-[-0.1692px]" data-node-id="I40:29336;39:22640">
                      Республика Адыгея, Энем, улица 68-й Морской Бригады, д. 12
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] w-full" data-node-id="I40:29336;39:22639">
                    <p className="max-w-[300px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis" data-node-id="I40:29336;39:22635">
                      Доктор Шорты, ООО,
                    </p>
                    <p className="relative shrink-0 text-[length:var(--font\/font-size\/font-size_xs,12px)]" data-node-id="I40:29336;39:22638">
                      6723907654
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center pt-[4px] relative shrink-0 w-[72px]" data-node-id="I40:29336;39:23383">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[16px]" data-node-id="I40:29336;39:22732" data-name="Проверено админом">
                  <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic opacity-0 relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] w-full" data-node-id="I40:29336;39:22730">{`\uEB4D`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] gap-[12px] items-start justify-end leading-[normal] min-w-px not-italic pt-[6px] relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] whitespace-nowrap" data-node-id="I40:29336;39:23384">
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I40:29336;39:22725">
                  2 сен
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I40:29336;39:22727">
                  5
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I40:29336;39:22728">
                  1
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis text-right" data-node-id="I40:29336;39:22729">
                  Отель
                </p>
              </div>
              <div className="absolute bg-[var(--background\/hover_background-color,#f3f4f8)] bottom-0 content-stretch flex gap-[var(--offset\/offset_xs,6px)] items-end justify-end opacity-0 pb-[3px] pt-[4px] px-[var(--offset\/offset_xs,6px)] right-0" data-node-id="I40:29336;40:30221" data-name="Command">
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I40:29336;40:30226" data-name="Удалить">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29336;40:30226;13973:4084" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29336;40:30226;13973:4084;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I40:29336;40:30226;13973:4084;12337:7243;5565:16627" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/danger_icon-color,#c2140a)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" data-node-id="I40:29336;40:30226;13973:4084;12337:7243;5565:16627;8306:1722">{`\uE65C`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--background\/background-color,white)] content-stretch flex gap-[12px] items-start overflow-clip pb-[3px] pr-[12px] relative shrink-0 w-full" data-node-id="40:29371" data-name="Запись списка">
              <div className="content-stretch flex items-start relative shrink-0 w-[350px]" data-node-id="I40:29371;39:23329">
                <Checkbox1 captionVisible={false} className="content-stretch flex items-start opacity-0 relative shrink-0" />
                <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] items-start leading-[normal] not-italic pt-[4px] relative shrink-0 w-[268px] whitespace-nowrap" data-node-id="I40:29371;39:22642">
                  <div className="content-stretch flex gap-[8px] items-baseline relative shrink-0 w-full" data-node-id="I40:29371;39:22641">
                    <p className="relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px]" data-node-id="I40:29371;39:22632">
                      Деревенька
                    </p>
                    <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] text-ellipsis tracking-[-0.1692px]" data-node-id="I40:29371;39:22640">
                      г. Майкоп, ул. Гоголя, д. 28
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] w-full" data-node-id="I40:29371;39:22639">
                    <p className="max-w-[300px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis" data-node-id="I40:29371;39:22635">
                      Салон Красоты “Эстетика”, ООО,
                    </p>
                    <p className="relative shrink-0 text-[length:var(--font\/font-size\/font-size_xs,12px)]" data-node-id="I40:29371;39:22638">
                      6799005544
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center pt-[4px] relative shrink-0 w-[72px]" data-node-id="I40:29371;39:23383">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[16px]" data-node-id="I40:29371;39:22732" data-name="Проверено админом">
                  <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] w-full" data-node-id="I40:29371;39:22730">{`\uEB4D`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] gap-[12px] items-start justify-end leading-[normal] min-w-px not-italic pt-[6px] relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] whitespace-nowrap" data-node-id="I40:29371;39:23384">
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I40:29371;39:22725">
                  2 сен
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I40:29371;39:22727">
                  9
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px opacity-0 overflow-hidden relative text-ellipsis" data-node-id="I40:29371;39:22728">
                  2
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis text-right" data-node-id="I40:29371;39:22729">
                  Услуги
                </p>
              </div>
              <div className="absolute bg-[var(--background\/hover_background-color,#f3f4f8)] bottom-0 content-stretch flex gap-[var(--offset\/offset_xs,6px)] items-end justify-end opacity-0 pb-[3px] pt-[4px] px-[var(--offset\/offset_xs,6px)] right-0" data-node-id="I40:29371;40:30221" data-name="Command">
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I40:29371;40:30222" data-name="публикация">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29371;40:30222;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29371;40:30222;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I40:29371;40:30222;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I40:29371;40:30222;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE62F`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I40:29371;40:30226" data-name="Удалить">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29371;40:30226;13973:4084" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29371;40:30226;13973:4084;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I40:29371;40:30226;13973:4084;12337:7243;5565:16627" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/danger_icon-color,#c2140a)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" data-node-id="I40:29371;40:30226;13973:4084;12337:7243;5565:16627;8306:1722">{`\uE65C`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I40:29371;40:30227" data-name="3 точки">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29371;40:30227;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29371;40:30227;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I40:29371;40:30227;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I40:29371;40:30227;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE9D9`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--background\/background-color,white)] content-stretch flex gap-[12px] items-start overflow-clip pb-[3px] pr-[12px] relative shrink-0 w-full" data-node-id="40:29406" data-name="Запись списка">
              <div className="content-stretch flex items-start relative shrink-0 w-[350px]" data-node-id="I40:29406;39:23329">
                <Checkbox1 captionVisible={false} className="content-stretch flex items-start opacity-0 relative shrink-0" />
                <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] items-start leading-[normal] not-italic pt-[4px] relative shrink-0 w-[268px] whitespace-nowrap" data-node-id="I40:29406;39:22642">
                  <div className="content-stretch flex gap-[8px] items-baseline relative shrink-0 w-full" data-node-id="I40:29406;39:22641">
                    <p className="relative shrink-0 text-[color:var(--text\/label_text-color,#8991a9)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px]" data-node-id="I40:29406;39:22632">
                      Доктор Мяу
                    </p>
                    <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] text-ellipsis tracking-[-0.1692px]" data-node-id="I40:29406;39:22640">
                      Республика Адыгея, Энем, улица 68-й Морской Бригады, д. 12
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] w-full" data-node-id="I40:29406;39:22639">
                    <p className="max-w-[300px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis" data-node-id="I40:29406;39:22635">
                      Доктор Шорты, ООО,
                    </p>
                    <p className="relative shrink-0 text-[length:var(--font\/font-size\/font-size_xs,12px)]" data-node-id="I40:29406;39:22638">
                      4563786541
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center pt-[4px] relative shrink-0 w-[72px]" data-node-id="I40:29406;39:23383">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[16px]" data-node-id="I40:29406;39:22732" data-name="Проверено админом">
                  <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic opacity-0 relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] w-full" data-node-id="I40:29406;39:22730">{`\uEB4D`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] gap-[12px] items-start justify-end leading-[normal] min-w-px not-italic pt-[6px] relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] whitespace-nowrap" data-node-id="I40:29406;39:23384">
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I40:29406;39:22725">
                  2 сен
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I40:29406;39:22727">
                  76
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px opacity-0 overflow-hidden relative text-ellipsis" data-node-id="I40:29406;39:22728">
                  2
                </p>
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis text-right" data-node-id="I40:29406;39:22729">
                  Доставка из ресторана
                </p>
              </div>
              <div className="absolute bg-[var(--background\/hover_background-color,#f3f4f8)] bottom-0 content-stretch flex gap-[var(--offset\/offset_xs,6px)] items-end justify-end opacity-0 pb-[3px] pt-[4px] px-[var(--offset\/offset_xs,6px)] right-0" data-node-id="I40:29406;40:30221" data-name="Command">
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I40:29406;40:30222" data-name="публикация">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29406;40:30222;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29406;40:30222;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I40:29406;40:30222;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I40:29406;40:30222;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE631`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I40:29406;40:30226" data-name="Удалить">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29406;40:30226;13973:4084" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29406;40:30226;13973:4084;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I40:29406;40:30226;13973:4084;12337:7243;5565:16627" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/danger_icon-color,#c2140a)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" data-node-id="I40:29406;40:30226;13973:4084;12337:7243;5565:16627;8306:1722">{`\uE65C`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I40:29406;40:30227" data-name="3 точки">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29406;40:30227;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29406;40:30227;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I40:29406;40:30227;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I40:29406;40:30227;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE9D9`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--background\/background-color,white)] content-stretch flex gap-[12px] items-start overflow-clip pb-[3px] pr-[12px] relative shrink-0 w-full" data-node-id="127:16219" data-name="Запись списка">
              <div className="content-stretch flex items-start relative shrink-0 w-[350px]" data-node-id="I127:16219;39:23329">
                <Checkbox1 captionVisible={false} className="content-stretch flex items-start opacity-0 relative shrink-0" />
                <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] items-start leading-[normal] not-italic pt-[4px] relative shrink-0 w-[268px] whitespace-nowrap" data-node-id="I127:16219;39:22642">
                  <div className="content-stretch flex gap-[8px] items-baseline relative shrink-0 w-full" data-node-id="I127:16219;39:22641">
                    <p className="relative shrink-0 text-[color:var(--text\/label_text-color,#8991a9)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px]" data-node-id="I127:16219;39:22632">
                      Авангард
                    </p>
                    <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] text-ellipsis tracking-[-0.1692px]" data-node-id="I127:16219;39:22640">
                      г. Майкоп, ул. Хакурате, д. 534
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] w-full" data-node-id="I127:16219;39:22639">
                    <p className="max-w-[300px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis" data-node-id="I127:16219;39:22635">
                      Салон Красоты “Эстетика”, ООО,
                    </p>
                    <p className="relative shrink-0 text-[length:var(--font\/font-size\/font-size_xs,12px)]" data-node-id="I127:16219;39:22638">
                      5644322112
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center pt-[4px] relative shrink-0 w-[72px]" data-node-id="I127:16219;39:23383">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[16px]" data-node-id="I127:16219;39:22732" data-name="Проверено админом">
                  <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic opacity-0 relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] w-full" data-node-id="I127:16219;39:22730">{`\uEB4D`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] gap-[12px] items-start justify-end leading-[normal] min-w-px not-italic pt-[6px] relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] whitespace-nowrap" data-node-id="I127:16219;39:23384">
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I127:16219;39:22725">
                  1 сен
                </p>
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I127:16219;39:22727">
                  456
                </p>
                <p className="flex-[1_0_0] min-w-px opacity-0 overflow-hidden relative text-ellipsis" data-node-id="I127:16219;39:22728">
                  2
                </p>
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis text-right" data-node-id="I127:16219;39:22729">
                  Услуги
                </p>
              </div>
              <div className="absolute bg-[var(--background\/hover_background-color,#f3f4f8)] bottom-0 content-stretch flex gap-[var(--offset\/offset_xs,6px)] items-end justify-end opacity-0 pb-[3px] pt-[4px] px-[var(--offset\/offset_xs,6px)] right-0" data-node-id="I127:16219;40:30221" data-name="Command">
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I127:16219;40:30222" data-name="публикация">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I127:16219;40:30222;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:16219;40:30222;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I127:16219;40:30222;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I127:16219;40:30222;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE631`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I127:16219;40:30226" data-name="Удалить">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I127:16219;40:30226;13973:4084" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:16219;40:30226;13973:4084;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I127:16219;40:30226;13973:4084;12337:7243;5565:16627" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/danger_icon-color,#c2140a)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" data-node-id="I127:16219;40:30226;13973:4084;12337:7243;5565:16627;8306:1722">{`\uE65C`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I127:16219;40:30227" data-name="3 точки">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I127:16219;40:30227;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:16219;40:30227;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I127:16219;40:30227;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I127:16219;40:30227;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE9D9`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--background\/background-color,white)] content-stretch flex gap-[12px] items-start overflow-clip pb-[3px] pr-[12px] relative shrink-0 w-full" data-node-id="40:29441" data-name="Запись списка">
              <div className="content-stretch flex items-start relative shrink-0 w-[350px]" data-node-id="I40:29441;39:23329">
                <Checkbox1 captionVisible={false} className="content-stretch flex items-start opacity-0 relative shrink-0" />
                <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] items-start leading-[normal] not-italic pt-[4px] relative shrink-0 w-[268px] whitespace-nowrap" data-node-id="I40:29441;39:22642">
                  <div className="content-stretch flex gap-[8px] items-baseline relative shrink-0 w-full" data-node-id="I40:29441;39:22641">
                    <p className="relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px]" data-node-id="I40:29441;39:22632">
                      Дом у реки
                    </p>
                    <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] text-ellipsis tracking-[-0.1692px]" data-node-id="I40:29441;39:22640">
                      Респ. Адыгея, Тахтамукайский р-н, пгт. Энем, ул. Перова, д. 36, к. 1
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] w-full" data-node-id="I40:29441;39:22639">
                    <p className="max-w-[300px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis" data-node-id="I40:29441;39:22635">
                      Салон Красоты “Эстетика”, ООО,
                    </p>
                    <p className="relative shrink-0 text-[length:var(--font\/font-size\/font-size_xs,12px)]" data-node-id="I40:29441;39:22638">
                      1112456732
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center pt-[4px] relative shrink-0 w-[72px]" data-node-id="I40:29441;39:23383">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[16px]" data-node-id="I40:29441;39:22732" data-name="Проверено админом">
                  <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] w-full" data-node-id="I40:29441;39:22730">{`\uEB4D`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] gap-[12px] items-start justify-end leading-[normal] min-w-px not-italic pt-[6px] relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] whitespace-nowrap" data-node-id="I40:29441;39:23384">
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I40:29441;39:22725">
                  1 сен
                </p>
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I40:29441;39:22727">
                  11
                </p>
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I40:29441;39:22728">
                  2
                </p>
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis text-right" data-node-id="I40:29441;39:22729">
                  Услуги
                </p>
              </div>
              <div className="absolute bg-[var(--background\/hover_background-color,#f3f4f8)] bottom-0 content-stretch flex gap-[var(--offset\/offset_xs,6px)] items-end justify-end opacity-0 pb-[3px] pt-[4px] px-[var(--offset\/offset_xs,6px)] right-0" data-node-id="I40:29441;40:30221" data-name="Command">
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I40:29441;40:30222" data-name="публикация">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29441;40:30222;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29441;40:30222;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I40:29441;40:30222;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I40:29441;40:30222;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE62F`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I40:29441;40:30226" data-name="Удалить">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29441;40:30226;13973:4084" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29441;40:30226;13973:4084;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I40:29441;40:30226;13973:4084;12337:7243;5565:16627" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/danger_icon-color,#c2140a)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" data-node-id="I40:29441;40:30226;13973:4084;12337:7243;5565:16627;8306:1722">{`\uE65C`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I40:29441;40:30227" data-name="3 точки">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29441;40:30227;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29441;40:30227;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I40:29441;40:30227;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I40:29441;40:30227;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE9D9`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--background\/background-color,white)] content-stretch flex gap-[12px] items-start overflow-clip pb-[3px] pr-[12px] relative shrink-0 w-full" data-node-id="40:29486" data-name="Запись списка">
              <div className="content-stretch flex items-start relative shrink-0 w-[350px]" data-node-id="I40:29486;39:23329">
                <Checkbox1 captionVisible={false} className="content-stretch flex items-start opacity-0 relative shrink-0" />
                <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] items-start leading-[normal] not-italic pt-[4px] relative shrink-0 w-[268px] whitespace-nowrap" data-node-id="I40:29486;39:22642">
                  <div className="content-stretch flex gap-[8px] items-baseline relative shrink-0 w-full" data-node-id="I40:29486;39:22641">
                    <p className="relative shrink-0 text-[color:var(--text\/label_text-color,#8991a9)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px]" data-node-id="I40:29486;39:22632">
                      Авангард
                    </p>
                    <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] text-ellipsis tracking-[-0.1692px]" data-node-id="I40:29486;39:22640">
                      г. Майкоп, ул. Хакурате, д. 534
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] w-full" data-node-id="I40:29486;39:22639">
                    <p className="max-w-[300px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis" data-node-id="I40:29486;39:22635">
                      Салон Красоты “Эстетика”, ООО,
                    </p>
                    <p className="relative shrink-0 text-[length:var(--font\/font-size\/font-size_xs,12px)]" data-node-id="I40:29486;39:22638">
                      5644322112
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center pt-[4px] relative shrink-0 w-[72px]" data-node-id="I40:29486;39:23383">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[16px]" data-node-id="I40:29486;39:22732" data-name="Проверено админом">
                  <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic opacity-0 relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] w-full" data-node-id="I40:29486;39:22730">{`\uEB4D`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] gap-[12px] items-start justify-end leading-[normal] min-w-px not-italic pt-[6px] relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] whitespace-nowrap" data-node-id="I40:29486;39:23384">
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I40:29486;39:22725">
                  1 сен
                </p>
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I40:29486;39:22727">
                  456
                </p>
                <p className="flex-[1_0_0] min-w-px opacity-0 overflow-hidden relative text-ellipsis" data-node-id="I40:29486;39:22728">
                  2
                </p>
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis text-right" data-node-id="I40:29486;39:22729">
                  Услуги
                </p>
              </div>
              <div className="absolute bg-[var(--background\/hover_background-color,#f3f4f8)] bottom-0 content-stretch flex gap-[var(--offset\/offset_xs,6px)] items-end justify-end opacity-0 pb-[3px] pt-[4px] px-[var(--offset\/offset_xs,6px)] right-0" data-node-id="I40:29486;40:30221" data-name="Command">
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I40:29486;40:30222" data-name="публикация">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29486;40:30222;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29486;40:30222;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I40:29486;40:30222;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I40:29486;40:30222;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE631`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I40:29486;40:30226" data-name="Удалить">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29486;40:30226;13973:4084" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29486;40:30226;13973:4084;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I40:29486;40:30226;13973:4084;12337:7243;5565:16627" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/danger_icon-color,#c2140a)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" data-node-id="I40:29486;40:30226;13973:4084;12337:7243;5565:16627;8306:1722">{`\uE65C`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I40:29486;40:30227" data-name="3 точки">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29486;40:30227;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29486;40:30227;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I40:29486;40:30227;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I40:29486;40:30227;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE9D9`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--background\/background-color,white)] content-stretch flex gap-[12px] items-start overflow-clip pb-[3px] pr-[12px] relative shrink-0 w-full" data-node-id="127:16321" data-name="Запись списка">
              <div className="content-stretch flex items-start relative shrink-0 w-[350px]" data-node-id="I127:16321;39:23329">
                <Checkbox1 captionVisible={false} className="content-stretch flex items-start opacity-0 relative shrink-0" />
                <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] items-start leading-[normal] not-italic pt-[4px] relative shrink-0 w-[268px] whitespace-nowrap" data-node-id="I127:16321;39:22642">
                  <div className="content-stretch flex gap-[8px] items-baseline relative shrink-0 w-full" data-node-id="I127:16321;39:22641">
                    <p className="relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px]" data-node-id="I127:16321;39:22632">
                      “Дом моды”
                    </p>
                    <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] text-ellipsis tracking-[-0.1692px]" data-node-id="I127:16321;39:22640">
                      Республика Адыгея, Энем, улица 68-й Морской Бригады, д. 12
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] w-full" data-node-id="I127:16321;39:22639">
                    <p className="max-w-[300px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis" data-node-id="I127:16321;39:22635">
                      Доктор Шорты, ООО,
                    </p>
                    <p className="relative shrink-0 text-[length:var(--font\/font-size\/font-size_xs,12px)]" data-node-id="I127:16321;39:22638">
                      6723907654
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center pt-[4px] relative shrink-0 w-[72px]" data-node-id="I127:16321;39:23383">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[16px]" data-node-id="I127:16321;39:22732" data-name="Проверено админом">
                  <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic opacity-0 relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] w-full" data-node-id="I127:16321;39:22730">{`\uEB4D`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] gap-[12px] items-start justify-end leading-[normal] min-w-px not-italic pt-[6px] relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] whitespace-nowrap" data-node-id="I127:16321;39:23384">
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I127:16321;39:22725">
                  1 сен
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I127:16321;39:22727">
                  5
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I127:16321;39:22728">
                  1
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis text-right" data-node-id="I127:16321;39:22729">
                  Отель
                </p>
              </div>
              <div className="absolute bg-[var(--background\/hover_background-color,#f3f4f8)] bottom-0 content-stretch flex gap-[var(--offset\/offset_xs,6px)] items-end justify-end opacity-0 pb-[3px] pt-[4px] px-[var(--offset\/offset_xs,6px)] right-0" data-node-id="I127:16321;40:30221" data-name="Command">
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I127:16321;40:30226" data-name="Удалить">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I127:16321;40:30226;13973:4084" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:16321;40:30226;13973:4084;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I127:16321;40:30226;13973:4084;12337:7243;5565:16627" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/danger_icon-color,#c2140a)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" data-node-id="I127:16321;40:30226;13973:4084;12337:7243;5565:16627;8306:1722">{`\uE65C`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--background\/background-color,white)] content-stretch flex gap-[12px] items-start overflow-clip pb-[3px] pr-[12px] relative shrink-0 w-full" data-node-id="127:16322" data-name="Запись списка">
              <div className="content-stretch flex items-start relative shrink-0 w-[350px]" data-node-id="I127:16322;39:23329">
                <Checkbox1 captionVisible={false} className="content-stretch flex items-start opacity-0 relative shrink-0" />
                <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] items-start leading-[normal] not-italic pt-[4px] relative shrink-0 w-[268px] whitespace-nowrap" data-node-id="I127:16322;39:22642">
                  <div className="content-stretch flex gap-[8px] items-baseline relative shrink-0 w-full" data-node-id="I127:16322;39:22641">
                    <p className="relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px]" data-node-id="I127:16322;39:22632">
                      Деревенька
                    </p>
                    <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] text-ellipsis tracking-[-0.1692px]" data-node-id="I127:16322;39:22640">
                      г. Майкоп, ул. Гоголя, д. 28
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] w-full" data-node-id="I127:16322;39:22639">
                    <p className="max-w-[300px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis" data-node-id="I127:16322;39:22635">
                      Салон Красоты “Эстетика”, ООО,
                    </p>
                    <p className="relative shrink-0 text-[length:var(--font\/font-size\/font-size_xs,12px)]" data-node-id="I127:16322;39:22638">
                      6799005544
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center pt-[4px] relative shrink-0 w-[72px]" data-node-id="I127:16322;39:23383">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[16px]" data-node-id="I127:16322;39:22732" data-name="Проверено админом">
                  <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] w-full" data-node-id="I127:16322;39:22730">{`\uEB4D`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] gap-[12px] items-start justify-end leading-[normal] min-w-px not-italic pt-[6px] relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] whitespace-nowrap" data-node-id="I127:16322;39:23384">
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I127:16322;39:22725">
                  1 сен
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I127:16322;39:22727">
                  9
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px opacity-0 overflow-hidden relative text-ellipsis" data-node-id="I127:16322;39:22728">
                  2
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis text-right" data-node-id="I127:16322;39:22729">
                  Доставка из ресторана
                </p>
              </div>
              <div className="absolute bg-[var(--background\/hover_background-color,#f3f4f8)] bottom-0 content-stretch flex gap-[var(--offset\/offset_xs,6px)] items-end justify-end opacity-0 pb-[3px] pt-[4px] px-[var(--offset\/offset_xs,6px)] right-0" data-node-id="I127:16322;40:30221" data-name="Command">
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I127:16322;40:30222" data-name="публикация">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I127:16322;40:30222;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:16322;40:30222;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I127:16322;40:30222;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I127:16322;40:30222;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE62F`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I127:16322;40:30226" data-name="Удалить">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I127:16322;40:30226;13973:4084" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:16322;40:30226;13973:4084;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I127:16322;40:30226;13973:4084;12337:7243;5565:16627" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/danger_icon-color,#c2140a)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" data-node-id="I127:16322;40:30226;13973:4084;12337:7243;5565:16627;8306:1722">{`\uE65C`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I127:16322;40:30227" data-name="3 точки">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I127:16322;40:30227;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:16322;40:30227;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I127:16322;40:30227;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I127:16322;40:30227;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE9D9`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--background\/background-color,white)] content-stretch flex gap-[12px] items-start overflow-clip pb-[3px] pr-[12px] relative shrink-0 w-full" data-node-id="40:29556" data-name="Запись списка">
              <div className="content-stretch flex items-start relative shrink-0 w-[350px]" data-node-id="I40:29556;39:23329">
                <Checkbox1 captionVisible={false} className="content-stretch flex items-start opacity-0 relative shrink-0" />
                <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] items-start leading-[normal] not-italic pt-[4px] relative shrink-0 w-[268px] whitespace-nowrap" data-node-id="I40:29556;39:22642">
                  <div className="content-stretch flex gap-[8px] items-baseline relative shrink-0 w-full" data-node-id="I40:29556;39:22641">
                    <p className="relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px]" data-node-id="I40:29556;39:22632">
                      У Михалыча
                    </p>
                    <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] text-ellipsis tracking-[-0.1692px]" data-node-id="I40:29556;39:22640">
                      г. Майкоп, ул. Хакурате, д. 534
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] w-full" data-node-id="I40:29556;39:22639">
                    <p className="max-w-[300px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis" data-node-id="I40:29556;39:22635">{`Детский Сад № 20 "Ромашка", МБДОУ,`}</p>
                    <p className="relative shrink-0 text-[length:var(--font\/font-size\/font-size_xs,12px)]" data-node-id="I40:29556;39:22638">
                      5676443545
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center pt-[4px] relative shrink-0 w-[72px]" data-node-id="I40:29556;39:23383">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[16px]" data-node-id="I40:29556;39:22732" data-name="Проверено админом">
                  <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic opacity-0 relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] w-full" data-node-id="I40:29556;39:22730">{`\uEB4D`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] gap-[12px] items-start justify-end leading-[normal] min-w-px not-italic pt-[6px] relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] whitespace-nowrap" data-node-id="I40:29556;39:23384">
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I40:29556;39:22725">
                  1 сен
                </p>
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I40:29556;39:22727">
                  45
                </p>
                <p className="flex-[1_0_0] min-w-px opacity-0 overflow-hidden relative text-ellipsis" data-node-id="I40:29556;39:22728">
                  2
                </p>
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis text-right" data-node-id="I40:29556;39:22729">
                  Услуги
                </p>
              </div>
              <div className="absolute bg-[var(--background\/hover_background-color,#f3f4f8)] bottom-0 content-stretch flex gap-[var(--offset\/offset_xs,6px)] items-end justify-end opacity-0 pb-[3px] pt-[4px] px-[var(--offset\/offset_xs,6px)] right-0" data-node-id="I40:29556;40:30221" data-name="Command">
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I40:29556;40:30222" data-name="публикация">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29556;40:30222;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29556;40:30222;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I40:29556;40:30222;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I40:29556;40:30222;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE62F`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I40:29556;40:30226" data-name="Удалить">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29556;40:30226;13973:4084" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29556;40:30226;13973:4084;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I40:29556;40:30226;13973:4084;12337:7243;5565:16627" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/danger_icon-color,#c2140a)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" data-node-id="I40:29556;40:30226;13973:4084;12337:7243;5565:16627;8306:1722">{`\uE65C`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I40:29556;40:30227" data-name="3 точки">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29556;40:30227;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29556;40:30227;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I40:29556;40:30227;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I40:29556;40:30227;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE9D9`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--background\/background-color,white)] content-stretch flex gap-[12px] items-start overflow-clip pb-[3px] pr-[12px] relative shrink-0 w-full" data-node-id="127:16323" data-name="Запись списка">
              <div className="content-stretch flex items-start relative shrink-0 w-[350px]" data-node-id="I127:16323;39:23329">
                <Checkbox1 captionVisible={false} className="content-stretch flex items-start opacity-0 relative shrink-0" />
                <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] items-start leading-[normal] not-italic pt-[4px] relative shrink-0 w-[268px] whitespace-nowrap" data-node-id="I127:16323;39:22642">
                  <div className="content-stretch flex gap-[8px] items-baseline relative shrink-0 w-full" data-node-id="I127:16323;39:22641">
                    <p className="relative shrink-0 text-[color:var(--text\/label_text-color,#8991a9)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px]" data-node-id="I127:16323;39:22632">
                      Доктор Мяу
                    </p>
                    <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] text-ellipsis tracking-[-0.1692px]" data-node-id="I127:16323;39:22640">
                      Республика Адыгея, Энем, улица 68-й Морской Бригады, д. 12
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] w-full" data-node-id="I127:16323;39:22639">
                    <p className="max-w-[300px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis" data-node-id="I127:16323;39:22635">
                      Доктор Шорты, ООО,
                    </p>
                    <p className="relative shrink-0 text-[length:var(--font\/font-size\/font-size_xs,12px)]" data-node-id="I127:16323;39:22638">
                      4563786541
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center pt-[4px] relative shrink-0 w-[72px]" data-node-id="I127:16323;39:23383">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[16px]" data-node-id="I127:16323;39:22732" data-name="Проверено админом">
                  <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic opacity-0 relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] w-full" data-node-id="I127:16323;39:22730">{`\uEB4D`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] gap-[12px] items-start justify-end leading-[normal] min-w-px not-italic pt-[6px] relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] whitespace-nowrap" data-node-id="I127:16323;39:23384">
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I127:16323;39:22725">
                  31 авг
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I127:16323;39:22727">
                  76
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px opacity-0 overflow-hidden relative text-ellipsis" data-node-id="I127:16323;39:22728">
                  2
                </p>
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis text-right" data-node-id="I127:16323;39:22729">
                  Доставка из ресторана
                </p>
              </div>
              <div className="absolute bg-[var(--background\/hover_background-color,#f3f4f8)] bottom-0 content-stretch flex gap-[var(--offset\/offset_xs,6px)] items-end justify-end opacity-0 pb-[3px] pt-[4px] px-[var(--offset\/offset_xs,6px)] right-0" data-node-id="I127:16323;40:30221" data-name="Command">
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I127:16323;40:30222" data-name="публикация">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I127:16323;40:30222;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:16323;40:30222;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I127:16323;40:30222;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I127:16323;40:30222;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE631`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I127:16323;40:30226" data-name="Удалить">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I127:16323;40:30226;13973:4084" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:16323;40:30226;13973:4084;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I127:16323;40:30226;13973:4084;12337:7243;5565:16627" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/danger_icon-color,#c2140a)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" data-node-id="I127:16323;40:30226;13973:4084;12337:7243;5565:16627;8306:1722">{`\uE65C`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I127:16323;40:30227" data-name="3 точки">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I127:16323;40:30227;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:16323;40:30227;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I127:16323;40:30227;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I127:16323;40:30227;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE9D9`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--background\/background-color,white)] content-stretch flex gap-[12px] items-start overflow-clip pb-[3px] pr-[12px] relative shrink-0 w-full" data-node-id="127:15897" data-name="Запись списка">
              <div className="content-stretch flex items-start relative shrink-0 w-[350px]" data-node-id="I127:15897;39:23329">
                <Checkbox1 captionVisible={false} className="content-stretch flex items-start opacity-0 relative shrink-0" />
                <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] items-start leading-[normal] not-italic pt-[4px] relative shrink-0 w-[268px] whitespace-nowrap" data-node-id="I127:15897;39:22642">
                  <div className="content-stretch flex gap-[8px] items-baseline relative shrink-0 w-full" data-node-id="I127:15897;39:22641">
                    <p className="relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px]" data-node-id="I127:15897;39:22632">
                      Рога и копыта
                    </p>
                    <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] text-ellipsis tracking-[-0.1692px]" data-node-id="I127:15897;39:22640">
                      г. Майкоп, ул. Гоголя, д. 28
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] w-full" data-node-id="I127:15897;39:22639">
                    <p className="max-w-[300px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis" data-node-id="I127:15897;39:22635">
                      Доктор Шорты, ООО,
                    </p>
                    <p className="relative shrink-0 text-[length:var(--font\/font-size\/font-size_xs,12px)]" data-node-id="I127:15897;39:22638">
                      9098778998
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center pt-[4px] relative shrink-0 w-[72px]" data-node-id="I127:15897;39:23383">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[16px]" data-node-id="I127:15897;39:22732" data-name="Проверено админом">
                  <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic opacity-0 relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] w-full" data-node-id="I127:15897;39:22730">{`\uEB4D`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] gap-[12px] items-start justify-end leading-[normal] min-w-px not-italic pt-[6px] relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] whitespace-nowrap" data-node-id="I127:15897;39:23384">
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I127:15897;39:22725">
                  31 авг
                </p>
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I127:15897;39:22727">
                  90
                </p>
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I127:15897;39:22728">
                  9
                </p>
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis text-right" data-node-id="I127:15897;39:22729">
                  Услуги
                </p>
              </div>
              <div className="absolute bg-[var(--background\/hover_background-color,#f3f4f8)] bottom-0 content-stretch flex gap-[var(--offset\/offset_xs,6px)] items-end justify-end opacity-0 pb-[3px] pt-[4px] px-[var(--offset\/offset_xs,6px)] right-0" data-node-id="I127:15897;40:30221" data-name="Command">
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I127:15897;40:30222" data-name="публикация">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I127:15897;40:30222;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:15897;40:30222;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I127:15897;40:30222;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I127:15897;40:30222;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE62F`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--background\/background-color,white)] content-stretch flex gap-[12px] items-start overflow-clip pb-[3px] pr-[12px] relative shrink-0 w-full" data-node-id="40:29521" data-name="Запись списка">
              <div className="content-stretch flex items-start relative shrink-0 w-[350px]" data-node-id="I40:29521;39:23329">
                <Checkbox1 captionVisible={false} className="content-stretch flex items-start opacity-0 relative shrink-0" />
                <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] items-start leading-[normal] not-italic pt-[4px] relative shrink-0 w-[268px] whitespace-nowrap" data-node-id="I40:29521;39:22642">
                  <div className="content-stretch flex gap-[8px] items-baseline relative shrink-0 w-full" data-node-id="I40:29521;39:22641">
                    <p className="relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px]" data-node-id="I40:29521;39:22632">
                      Рога и копыта
                    </p>
                    <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] text-ellipsis tracking-[-0.1692px]" data-node-id="I40:29521;39:22640">
                      г. Майкоп, ул. Гоголя, д. 28
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] w-full" data-node-id="I40:29521;39:22639">
                    <p className="max-w-[300px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis" data-node-id="I40:29521;39:22635">
                      Доктор Шорты, ООО,
                    </p>
                    <p className="relative shrink-0 text-[length:var(--font\/font-size\/font-size_xs,12px)]" data-node-id="I40:29521;39:22638">
                      9098778998
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center pt-[4px] relative shrink-0 w-[72px]" data-node-id="I40:29521;39:23383">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[16px]" data-node-id="I40:29521;39:22732" data-name="Проверено админом">
                  <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic opacity-0 relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] w-full" data-node-id="I40:29521;39:22730">{`\uEB4D`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] gap-[12px] items-start justify-end leading-[normal] min-w-px not-italic pt-[6px] relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] whitespace-nowrap" data-node-id="I40:29521;39:23384">
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I40:29521;39:22725">
                  31 авг
                </p>
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I40:29521;39:22727">
                  90
                </p>
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I40:29521;39:22728">
                  9
                </p>
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis text-right" data-node-id="I40:29521;39:22729">
                  Услуги
                </p>
              </div>
              <div className="absolute bg-[var(--background\/hover_background-color,#f3f4f8)] bottom-0 content-stretch flex gap-[var(--offset\/offset_xs,6px)] items-end justify-end opacity-0 pb-[3px] pt-[4px] px-[var(--offset\/offset_xs,6px)] right-0" data-node-id="I40:29521;40:30221" data-name="Command">
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I40:29521;40:30222" data-name="публикация">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29521;40:30222;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29521;40:30222;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I40:29521;40:30222;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I40:29521;40:30222;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE62F`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I40:29521;40:30226" data-name="Удалить">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29521;40:30226;13973:4084" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29521;40:30226;13973:4084;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I40:29521;40:30226;13973:4084;12337:7243;5565:16627" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/danger_icon-color,#c2140a)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" data-node-id="I40:29521;40:30226;13973:4084;12337:7243;5565:16627;8306:1722">{`\uE65C`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I40:29521;40:30227" data-name="3 точки">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29521;40:30227;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29521;40:30227;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I40:29521;40:30227;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I40:29521;40:30227;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE9D9`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--background\/background-color,white)] content-stretch flex gap-[12px] items-start overflow-clip pb-[3px] pr-[12px] relative shrink-0 w-full" data-node-id="127:16015" data-name="Запись списка">
              <div className="content-stretch flex items-start relative shrink-0 w-[350px]" data-node-id="I127:16015;39:23329">
                <Checkbox1 captionVisible={false} className="content-stretch flex items-start opacity-0 relative shrink-0" />
                <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] items-start leading-[normal] not-italic pt-[4px] relative shrink-0 w-[268px] whitespace-nowrap" data-node-id="I127:16015;39:22642">
                  <div className="content-stretch flex gap-[8px] items-baseline relative shrink-0 w-full" data-node-id="I127:16015;39:22641">
                    <p className="relative shrink-0 text-[color:var(--text\/label_text-color,#8991a9)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px]" data-node-id="I127:16015;39:22632">
                      Доктор Мяу
                    </p>
                    <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] text-ellipsis tracking-[-0.1692px]" data-node-id="I127:16015;39:22640">
                      Республика Адыгея, Энем, улица 68-й Морской Бригады, д. 12
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] w-full" data-node-id="I127:16015;39:22639">
                    <p className="max-w-[300px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis" data-node-id="I127:16015;39:22635">
                      Доктор Шорты, ООО,
                    </p>
                    <p className="relative shrink-0 text-[length:var(--font\/font-size\/font-size_xs,12px)]" data-node-id="I127:16015;39:22638">
                      4563786541
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center pt-[4px] relative shrink-0 w-[72px]" data-node-id="I127:16015;39:23383">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[16px]" data-node-id="I127:16015;39:22732" data-name="Проверено админом">
                  <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic opacity-0 relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] w-full" data-node-id="I127:16015;39:22730">{`\uEB4D`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] gap-[12px] items-start justify-end leading-[normal] min-w-px not-italic pt-[6px] relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] whitespace-nowrap" data-node-id="I127:16015;39:23384">
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I127:16015;39:22725">
                  31 авг
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I127:16015;39:22727">
                  76
                </p>
                <p className="flex-[1_0_0] h-[15px] min-w-px opacity-0 overflow-hidden relative text-ellipsis" data-node-id="I127:16015;39:22728">
                  2
                </p>
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis text-right" data-node-id="I127:16015;39:22729">
                  Доставка из ресторана
                </p>
              </div>
              <div className="absolute bg-[var(--background\/hover_background-color,#f3f4f8)] bottom-0 content-stretch flex gap-[var(--offset\/offset_xs,6px)] items-end justify-end opacity-0 pb-[3px] pt-[4px] px-[var(--offset\/offset_xs,6px)] right-0" data-node-id="I127:16015;40:30221" data-name="Command">
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I127:16015;40:30222" data-name="публикация">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I127:16015;40:30222;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:16015;40:30222;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I127:16015;40:30222;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I127:16015;40:30222;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE631`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I127:16015;40:30226" data-name="Удалить">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I127:16015;40:30226;13973:4084" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:16015;40:30226;13973:4084;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I127:16015;40:30226;13973:4084;12337:7243;5565:16627" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/danger_icon-color,#c2140a)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" data-node-id="I127:16015;40:30226;13973:4084;12337:7243;5565:16627;8306:1722">{`\uE65C`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I127:16015;40:30227" data-name="3 точки">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I127:16015;40:30227;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:16015;40:30227;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I127:16015;40:30227;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I127:16015;40:30227;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE9D9`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--background\/background-color,white)] content-stretch flex gap-[12px] items-start overflow-clip pb-[3px] pr-[12px] relative shrink-0 w-full" data-node-id="127:16324" data-name="Запись списка">
              <div className="content-stretch flex items-start relative shrink-0 w-[350px]" data-node-id="I127:16324;39:23329">
                <Checkbox1 captionVisible={false} className="content-stretch flex items-start opacity-0 relative shrink-0" />
                <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] items-start leading-[normal] not-italic pt-[4px] relative shrink-0 w-[268px] whitespace-nowrap" data-node-id="I127:16324;39:22642">
                  <div className="content-stretch flex gap-[8px] items-baseline relative shrink-0 w-full" data-node-id="I127:16324;39:22641">
                    <p className="relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px]" data-node-id="I127:16324;39:22632">
                      У Михалыча
                    </p>
                    <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] text-ellipsis tracking-[-0.1692px]" data-node-id="I127:16324;39:22640">
                      г. Майкоп, ул. Хакурате, д. 534
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] w-full" data-node-id="I127:16324;39:22639">
                    <p className="max-w-[300px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis" data-node-id="I127:16324;39:22635">{`Детский Сад № 20 "Ромашка", МБДОУ,`}</p>
                    <p className="relative shrink-0 text-[length:var(--font\/font-size\/font-size_xs,12px)]" data-node-id="I127:16324;39:22638">
                      5676443545
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center pt-[4px] relative shrink-0 w-[72px]" data-node-id="I127:16324;39:23383">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[16px]" data-node-id="I127:16324;39:22732" data-name="Проверено админом">
                  <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic opacity-0 relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] w-full" data-node-id="I127:16324;39:22730">{`\uEB4D`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] gap-[12px] items-start justify-end leading-[normal] min-w-px not-italic pt-[6px] relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] whitespace-nowrap" data-node-id="I127:16324;39:23384">
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I127:16324;39:22725">
                  31 авг
                </p>
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I127:16324;39:22727">
                  45
                </p>
                <p className="flex-[1_0_0] min-w-px opacity-0 overflow-hidden relative text-ellipsis" data-node-id="I127:16324;39:22728">
                  2
                </p>
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis text-right" data-node-id="I127:16324;39:22729">
                  Услуги
                </p>
              </div>
              <div className="absolute bg-[var(--background\/hover_background-color,#f3f4f8)] bottom-0 content-stretch flex gap-[var(--offset\/offset_xs,6px)] items-end justify-end opacity-0 pb-[3px] pt-[4px] px-[var(--offset\/offset_xs,6px)] right-0" data-node-id="I127:16324;40:30221" data-name="Command">
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I127:16324;40:30222" data-name="публикация">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I127:16324;40:30222;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:16324;40:30222;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I127:16324;40:30222;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I127:16324;40:30222;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE62F`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I127:16324;40:30226" data-name="Удалить">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I127:16324;40:30226;13973:4084" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:16324;40:30226;13973:4084;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I127:16324;40:30226;13973:4084;12337:7243;5565:16627" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/danger_icon-color,#c2140a)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" data-node-id="I127:16324;40:30226;13973:4084;12337:7243;5565:16627;8306:1722">{`\uE65C`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I127:16324;40:30227" data-name="3 точки">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I127:16324;40:30227;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:16324;40:30227;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I127:16324;40:30227;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I127:16324;40:30227;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE9D9`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--background\/background-color,white)] content-stretch flex gap-[12px] items-start overflow-clip pb-[3px] pr-[12px] relative shrink-0 w-full" data-node-id="127:16117" data-name="Запись списка">
              <div className="content-stretch flex items-start relative shrink-0 w-[350px]" data-node-id="I127:16117;39:23329">
                <Checkbox1 captionVisible={false} className="content-stretch flex items-start opacity-0 relative shrink-0" />
                <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] items-start leading-[normal] not-italic pt-[4px] relative shrink-0 w-[268px] whitespace-nowrap" data-node-id="I127:16117;39:22642">
                  <div className="content-stretch flex gap-[8px] items-baseline relative shrink-0 w-full" data-node-id="I127:16117;39:22641">
                    <p className="relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px]" data-node-id="I127:16117;39:22632">
                      Рога и копыта
                    </p>
                    <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] text-ellipsis tracking-[-0.1692px]" data-node-id="I127:16117;39:22640">
                      г. Майкоп, ул. Гоголя, д. 28
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] w-full" data-node-id="I127:16117;39:22639">
                    <p className="max-w-[300px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis" data-node-id="I127:16117;39:22635">
                      Доктор Шорты, ООО,
                    </p>
                    <p className="relative shrink-0 text-[length:var(--font\/font-size\/font-size_xs,12px)]" data-node-id="I127:16117;39:22638">
                      9098778998
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center pt-[4px] relative shrink-0 w-[72px]" data-node-id="I127:16117;39:23383">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[16px]" data-node-id="I127:16117;39:22732" data-name="Проверено админом">
                  <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic opacity-0 relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] w-full" data-node-id="I127:16117;39:22730">{`\uEB4D`}</p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] gap-[12px] items-start justify-end leading-[normal] min-w-px not-italic pt-[6px] relative text-[12px] text-[color:var(--text\/unaccented_text-color,#999)] tracking-[-0.1692px] whitespace-nowrap" data-node-id="I127:16117;39:23384">
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I127:16117;39:22725">
                  31 авг
                </p>
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I127:16117;39:22727">
                  90
                </p>
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis" data-node-id="I127:16117;39:22728">
                  9
                </p>
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-ellipsis text-right" data-node-id="I127:16117;39:22729">
                  Красота
                </p>
              </div>
              <div className="absolute bg-[var(--background\/hover_background-color,#f3f4f8)] bottom-0 content-stretch flex gap-[var(--offset\/offset_xs,6px)] items-end justify-end opacity-0 pb-[3px] pt-[4px] px-[var(--offset\/offset_xs,6px)] right-0" data-node-id="I127:16117;40:30221" data-name="Command">
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I127:16117;40:30222" data-name="публикация">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I127:16117;40:30222;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:16117;40:30222;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I127:16117;40:30222;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I127:16117;40:30222;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE62F`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I127:16117;40:30226" data-name="Удалить">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I127:16117;40:30226;13973:4084" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:16117;40:30226;13973:4084;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I127:16117;40:30226;13973:4084;12337:7243;5565:16627" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/danger_icon-color,#c2140a)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" data-node-id="I127:16117;40:30226;13973:4084;12337:7243;5565:16627;8306:1722">{`\uE65C`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="I127:16117;40:30227" data-name="3 точки">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I127:16117;40:30227;12337:7640" data-name="_button">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I127:16117;40:30227;12337:7640;12337:7243" data-name="icons">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I127:16117;40:30227;12337:7640;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                        <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I127:16117;40:30227;12337:7640;12337:7243;5565:16629;8306:1722">{`\uE9D9`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-[185px] size-[16px] top-[116px]" data-node-id="300:16861" data-name="clickCursor">
              <div className="absolute bg-[#6cc] inset-0 opacity-50 rounded-[32px]" data-node-id="I300:16861;3784:15252" data-name="dot" />
              <CursorArrow className="absolute left-px size-[24px] top-[5px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[6px] h-[900px] items-center overflow-clip px-[10px] py-[6px] relative shrink-0" data-node-id="40:29931" data-name="Тулбар">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px relative" data-node-id="I40:29931;40:29703" data-name="topButtons">
          <SystemButton className="content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" propValue="CC" />
          <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[32px]" data-node-id="I40:29931;40:29988" data-name="Настроить">
            <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-node-id="I40:29931;40:29988;17890:9799" data-name="_buttonContent">
              <div className="content-stretch flex items-center relative shrink-0" data-node-id="I40:29931;40:29988;17890:9799;17890:165" data-name="iconWrap">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29931;40:29988;17890:9799;17890:166" data-name="icons/font">
                  <div className="content-stretch flex flex-col items-center justify-center pb-[2px] relative shrink-0 size-[24px]" data-node-id="I40:29931;40:29988;17890:9799;17890:166;17887:22651" data-name="iconWrap">
                    <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/m_icon_font-family,'cbuc-icons24:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/secondary_icon-color,#656c87)] text-[length:var(--icon\/icon_size\/icon-size_m,24px)] text-left whitespace-nowrap" data-node-id="I40:29931;40:29988;17890:9799;17890:166;17887:22652">{`\uEB66`}</p>
                  </div>
                </div>
              </div>
            </div>
          </button>
          <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[32px]" data-node-id="I40:29931;40:30000" data-name="Настроить">
            <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-node-id="I40:29931;40:30000;17890:9799" data-name="_buttonContent">
              <div className="content-stretch flex items-center relative shrink-0" data-node-id="I40:29931;40:30000;17890:9799;17890:165" data-name="iconWrap">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29931;40:30000;17890:9799;17890:166" data-name="icons/font">
                  <div className="content-stretch flex flex-col items-center justify-center pb-[2px] relative shrink-0 size-[24px]" data-node-id="I40:29931;40:30000;17890:9799;17890:166;17887:22651" data-name="iconWrap">
                    <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/m_icon_font-family,'cbuc-icons24:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/secondary_icon-color,#656c87)] text-[length:var(--icon\/icon_size\/icon-size_m,24px)] text-left whitespace-nowrap" data-node-id="I40:29931;40:30000;17890:9799;17890:166;17887:22652">{`\uE644`}</p>
                  </div>
                </div>
              </div>
            </div>
          </button>
          <div className="content-stretch flex flex-col h-[32px] items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 w-full" data-node-id="I40:29931;40:30016" data-name="Ссылка">
            <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-node-id="I40:29931;40:30016;17890:9799" data-name="_buttonContent">
              <div className="content-stretch flex items-center relative shrink-0" data-node-id="I40:29931;40:30016;17890:9799;17890:165" data-name="iconWrap">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29931;40:30016;17890:9799;17890:166" data-name="icons/font">
                  <div className="content-stretch flex flex-col items-center justify-center pb-[2px] relative shrink-0 size-[24px]" data-node-id="I40:29931;40:30016;17890:9799;17890:166;17887:22651" data-name="iconWrap">
                    <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/m_icon_font-family,'cbuc-icons24:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/secondary_icon-color,#656c87)] text-[length:var(--icon\/icon_size\/icon-size_m,24px)] whitespace-nowrap" data-node-id="I40:29931;40:30016;17890:9799;17890:166;17887:22652">{`\uE6A7`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-node-id="I40:29931;40:29706" data-name="Informers">
          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I40:29931;40:29707" data-name="_todayInformer">
            <div className="bg-[var(--background\/contrast\/pale_contrast_background-color,rgba(51,51,51,0.05))] content-stretch flex flex-col items-center justify-center pb-px relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[32px]" data-node-id="I40:29931;40:29707;7857:24884" data-name="Button">
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29931;40:29707;7857:24884;3972:20718" data-name="_button" />
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center left-[calc(50%+1px)] top-1/2" data-node-id="I40:29931;40:29707;7857:24875">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] mb-[-4px] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.1974px] whitespace-nowrap" data-node-id="I40:29931;40:29707;7857:24873">
                16
              </p>
              <div className="relative shrink-0 size-[13px]" data-node-id="I40:29931;40:29707;7857:24876">
                <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-0 not-italic text-[11px] text-black top-0 tracking-[-0.1551px] whitespace-nowrap" data-node-id="I40:29931;40:29707;7857:24870">
                  чт
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[var(--background\/contrast\/pale_contrast_background-color,rgba(51,51,51,0.05))] content-stretch flex flex-col items-center justify-center pb-px relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[32px]" data-node-id="I40:29931;40:29708" data-name="Button">
            <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29931;40:29708;3972:20718" data-name="_button">
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29931;40:29708;3972:20718;6678:54476" data-name="icons">
                <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I40:29931;40:29708;3972:20718;6678:54476;5565:16627" data-name="Ui базовый набор / Font">
                  <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/icon-color,#333)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" data-node-id="I40:29931;40:29708;3972:20718;6678:54476;5565:16627;8306:1722">{`\uE636`}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[var(--background\/contrast\/pale_contrast_background-color,rgba(51,51,51,0.05))] content-stretch flex flex-col items-center justify-center pb-px relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[32px]" data-node-id="I40:29931;40:29709" data-name="Button">
            <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I40:29931;40:29709;3972:20718" data-name="_button">
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40:29931;40:29709;3972:20718;6678:54476" data-name="icons">
                <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I40:29931;40:29709;3972:20718;6678:54476;5565:16627" data-name="Ui базовый набор / Font">
                  <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/icon-color,#333)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" data-node-id="I40:29931;40:29709;3972:20718;6678:54476;5565:16627;8306:1722">{`\uE65D`}</p>
                </div>
              </div>
            </div>
          </div>
          <HelpButton className="bg-[var(--background\/same\/info_same_background-color,#eeebff)] border border-[var(--background\/same\/info_active_same_background-color,#d4ccff)] border-solid content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" />
        </div>
      </div>
      <div className="absolute left-[1574px] size-[16px] top-[51px]" data-node-id="329:9697" data-name="clickCursor">
        <div className="absolute bg-[#6cc] inset-0 opacity-50 rounded-[32px]" data-node-id="I329:9697;3784:15252" data-name="dot" />
        <CursorArrow className="absolute left-px size-[24px] top-[5px]" />
      </div>
      <div className="absolute left-[1574px] size-[16px] top-[92px]" data-node-id="329:11378" data-name="clickCursor">
        <div className="absolute bg-[#6cc] inset-0 opacity-50 rounded-[32px]" data-node-id="I329:11378;3784:15252" data-name="dot" />
        <CursorArrow className="absolute left-px size-[24px] top-[5px]" />
      </div>
    </div>
  );
}
