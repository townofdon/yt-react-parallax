import { ControlRotate } from '../components/interactive/ControlRotate';
import { ControlTranslate } from '../components/interactive/ControlTranslate';
import { ScrollableArea } from '../components/interactive/ScrollableArea';

export const ExampleScrollText = () => {
  return (
    <ScrollableArea>
      <ControlTranslate scrollFromX={-30} scrollToX={30}>
        <h2 style={{ fontWeight: 200, marginBottom: 25, marginTop: 100 }}>
          Elegant <strong>Eats.</strong>
        </h2>
      </ControlTranslate>
      <div className="position-relative" style={{ height: 150, marginBottom: 100 }}>
        <ControlTranslate scrollFromX={10} scrollToX={20}>
          <ControlRotate className="position-absolute" from={-30} to={0}>
            <h1 style={{ fontSize: '10em', lineHeight: '1em', color: '#446' }}>E</h1>
          </ControlRotate>
        </ControlTranslate>
        <ControlTranslate scrollFromX={-10} scrollToX={-20}>
          <ControlRotate className="position-absolute" from={30} to={0}>
            <h1 style={{ fontSize: '10em', lineHeight: '1em' }}>E</h1>
          </ControlRotate>
        </ControlTranslate>
      </div>
      <ControlTranslate scrollFromX={5} scrollToX={-5}>
        <h6 style={{ fontWeight: 100, letterSpacing: '0.5em', marginBottom: 100, color: '#8da8dd' }}>
          ~~~~~ FARM TO TABLE CUISINE ~~~~~
        </h6>
      </ControlTranslate>
      <ControlTranslate scrollFromX={50} scrollToX={0}>
        <div className="d-inline-block" style={{ textAlign: 'left', marginBottom: 100 }}>
          <p>
            <strong>MENU</strong>
          </p>
          <p>Wild Salmon served over mustard radish &amp; burnt broccoli</p>
          <p>Smoked Brisket served on ciabatta with nanogreens and jalapeńo apricot sauce</p>
          <p>Eggs Benedict served with fresh-baked brioche and topped with potent horseradish</p>
        </div>
      </ControlTranslate>
      <div className="px-5 mt-5 mb-5">
        <div>
          <ControlTranslate scrollFromY={100} scrollToY={0} className="d-inline-block" style={styles.fauxButtonLeft}>
            <h5 className="mb-0">ORDER</h5>
          </ControlTranslate>
          <ControlTranslate scrollFromY={-100} scrollToY={0} className="d-inline-block" style={styles.fauxButtonRight}>
            <h5 className="mb-0" style={{ color: '#8da8dd' }}>
              NOW
            </h5>
          </ControlTranslate>
        </div>
      </div>
    </ScrollableArea>
  );
};

const styles = {
  fauxButtonLeft: {
    right: 0,
    border: '1px solid #8da8dd',
    borderRadius: 8,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 'none',
    paddingLeft: 15,
  },
  fauxButtonRight: {
    right: 0,
    border: '1px solid #8da8dd',
    borderRadius: 8,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeft: 'none',
    paddingRight: 15,
  },
};
