import * as S from './Widget.styled';

export default ({ show, widgetUrl }) => (
  <S.WidgetIframe id="wlack-iframe" active={show} src={widgetUrl} />
);
