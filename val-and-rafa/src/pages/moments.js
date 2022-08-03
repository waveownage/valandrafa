import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import image1 from './DSC00020.jpg';
import image2 from './DSC00022.jpg';
import image3 from './DSC08902.jpg';
import image4 from './DSC08905.jpg';
import image5 from './DSC08915.jpg';
import image6 from './DSC08917.jpg';
import image7 from './DSC08919.jpg';
import image8 from './DSC08920.jpg';
import image9 from './DSC08925.jpg';
import image10 from './DSC08935.jpg';
import image11 from './DSC08953.jpg';
import image12 from './DSC08954.jpg';
import image13 from './DSC08973.jpg';
import image14 from './DSC09022.jpg';
import image15 from './DSC09073.jpg';
import image16 from './DSC09094.jpg';
import image17 from './DSC09095.jpg';
import image18 from './DSC09135.jpg';
import image19 from './DSC09139.jpg';
import image20 from './DSC09143.jpg';
import image21 from './DSC09155.jpg';
import image22 from './DSC09156.jpg';
import image23 from './DSC09167.jpg';
import image24 from './DSC09172.jpg';
import image25 from './DSC09175.jpg';
import image26 from './DSC09185.jpg';
import image27 from './DSC09212.jpg';
import image28 from './DSC09258.jpg';
import image29 from './DSC09280.jpg';
import image30 from './DSC09303.jpg';
import image31 from './DSC09311.jpg';
import image32 from './DSC09366.jpg';
import image33 from './DSC09381.jpg';
import image34 from './DSC09383.jpg';
import image35 from './DSC09447.jpg';
import image36 from './DSC09477.jpg';
import image37 from './DSC09500.jpg';
import image38 from './DSC09503.jpg';
import image39 from './DSC09531.jpg';
import image40 from './DSC09537.jpg';
import image41 from './DSC09542.jpg';
import image42 from './DSC09544.jpg';
import image43 from './DSC09547.jpg';
import image44 from './DSC09568.jpg';
import image45 from './DSC09595.jpg';
import image46 from './DSC09618.jpg';
import image47 from './DSC09698.jpg';
import image48 from './DSC09702.jpg';
import image49 from './DSC09706.jpg';
import image50 from './DSC09714.jpg';
import image51 from './DSC09735.jpg';
import image52 from './DSC09738.jpg';
import image53 from './DSC09773.jpg';
import image54 from './DSC09786.jpg';
import image55 from './DSC09843.jpg';
import image56 from './DSC09855.jpg';
import image57 from './DSC09857.jpg';
import image58 from './DSC09863.jpg';
import image59 from './DSC09873.jpg';
import image60 from './DSC09894.jpg';
import image61 from './DSC09898.jpg';
import image62 from './DSC09908.jpg';
import image63 from './DSC09938.jpg';
import image64 from './DSC09941.jpg';
import image65 from './DSC09942.jpg';
import image66 from './DSC09980.jpg';
import image67 from './DSC09981.jpg';
import image68 from './DSC09991.jpg';
import image69 from './DSC09992.jpg';
import image70 from './79831777_10162790619660437_8838538405877907456_n.jpg';
import image71 from './89471830_10163209943315437_3937180873677340672_n.jpg';
import image72 from './116992872_10164059835865437_4974500594645180938_n.jpg';
import image73 from './120773203_10164299979325437_8646541378473987727_n.jpg';
import image74 from './161544002_10164981550815437_7799252322027084940_n.jpg';
import image75 from './197698770_10165318613365437_3972031809952387587_n.jpg';
import image76 from './239969341_10165587719095437_335955436255733032_n.jpg';
import image77 from './240444519_10165587719100437_3985318967178545180_n.jpg';
import image78 from './240453109_10165587719065437_6927576936017340354_n.jpg';
import image79 from './241086083_10165632239055437_5683043361146995566_n.jpg';
import image80 from './241086138_10165632239050437_8543650882265796679_n.jpg';
import image81 from './250332219_10165794640690437_6759046353379192176_n.jpg';
import image82 from './267583989_10165937892190437_4866328709623225086_n.jpg';
import image83 from './268797091_10165937892195437_6895012775739457281_n.jpg';
import image84 from './274673522_10166138817080437_3735248032264679125_n.jpg';
import image85 from './274701243_10166138817075437_7553712954745877410_n.jpg';
import image86 from './274786174_10166138817065437_876733594892761842_n.jpg';
import image87 from './274854004_10166138817085437_9079180082110559695_n.jpg';
import image88 from './275380469_10166164557870437_7991545016183537493_n.jpg';

const Moments = () =>{

    const photos = [ 
        {
        src: image1,
        width: 2,
        height: 3
      },
      {
        src: image2,
        width: 1,
        height: 1
      },
      {
        src: image3,
        width: 3,
        height: 3
      },
      {
        src: image4,
        width: 3,
        height: 3
      },
      {
        src: image5,
        width: 3,
        height: 3
      },
      {
        src: image6,
        width: 2,
        height: 3
      },
      {
        src: image7,
        width: 3,
        height: 4
      },
      {
        src: image8,
        width: 2,
        height: 3
      },
      {
        src: image9,
        width: 2,
        height: 3
      },
      {
        src: image10,
        width: 2,
        height: 3
      },
      {
        src: image11,
        width: 1,
        height: 1
      },
      {
        src: image12,
        width: 3,
        height: 3
      },
      {
        src: image13,
        width: 3,
        height: 3
      },
      {
        src: image14,
        width: 3,
        height: 3
      },
      {
        src: image15,
        width: 2,
        height: 3
      },
      {
        src: image16,
        width: 3,
        height: 4
      },
      {
        src: image17,
        width: 2,
        height: 3
      },
      {
        src: image18,
        width: 2,
        height: 3
      },
      {
        src: image19,
        width: 2,
        height: 3
      },
      {
        src: image20,
        width: 1,
        height: 1
      },
      {
        src: image21,
        width: 3,
        height: 3
      },
      {
        src: image22,
        width: 3,
        height: 3
      },
      {
        src: image23,
        width: 3,
        height: 3
      },
      {
        src: image24,
        width: 2,
        height: 3
      },
      {
        src: image25,
        width: 3,
        height: 4
      },
      {
        src: image26,
        width: 2,
        height: 3
      },
      {
        src: image27,
        width: 2,
        height: 3
      },
      {
        src: image28,
        width: 2,
        height: 3
      },
      {
        src: image29,
        width: 1,
        height: 1
      },
      {
        src: image30,
        width: 3,
        height: 3
      },
      {
        src: image31,
        width: 3,
        height: 3
      },
      {
        src: image32,
        width: 3,
        height: 3
      },
      {
        src: image33,
        width: 2,
        height: 3
      },
      {
        src: image34,
        width: 3,
        height: 4
      },
      {
        src: image35,
        width: 2,
        height: 3
      },
      {
        src: image36,
        width: 2,
        height: 3
      },
      {
        src: image37,
        width: 2,
        height: 3
      },
      {
        src: image38,
        width: 1,
        height: 1
      },
      {
        src: image39,
        width: 3,
        height: 3
      },
      {
        src: image40,
        width: 3,
        height: 3
      },
      {
        src: image41,
        width: 3,
        height: 3
      },
      {
        src: image42,
        width: 2,
        height: 3
      },
      {
        src: image43,
        width: 3,
        height: 4
      },
      {
        src: image44,
        width: 2,
        height: 3
      },
      {
        src: image45,
        width: 2,
        height: 3
      },
      {
        src: image46,
        width: 2,
        height: 3
      },
      {
        src: image47,
        width: 1,
        height: 1
      },
      {
        src: image48,
        width: 3,
        height: 3
      },
      {
        src: image49,
        width: 3,
        height: 3
      },
      {
        src: image50,
        width: 3,
        height: 3
      },
      {
        src: image51,
        width: 2,
        height: 3
      },
      {
        src: image52,
        width: 3,
        height: 4
      },
      {
        src: image53,
        width: 2,
        height: 3
      },
      {
        src: image54,
        width: 2,
        height: 3
      },
      {
        src: image55,
        width: 2,
        height: 3
      },
      {
        src: image56,
        width: 1,
        height: 1
      },
      {
        src: image57,
        width: 3,
        height: 3
      },
      {
        src: image58,
        width: 3,
        height: 3
      },
      {
        src: image59,
        width: 3,
        height: 3
      },
      {
        src: image60,
        width: 2,
        height: 3
      },
      {
        src: image61,
        width: 3,
        height: 4
      },
      {
        src: image62,
        width: 2,
        height: 3
      },
      {
        src: image63,
        width: 2,
        height: 3
      },
      {
        src: image64,
        width: 2,
        height: 3
      },
      {
        src: image65,
        width: 1,
        height: 1
      },
      {
        src: image66,
        width: 3,
        height: 3
      },
      {
        src: image67,
        width: 3,
        height: 3
      },
      {
        src: image68,
        width: 3,
        height: 3
      },
      {
        src: image69,
        width: 2,
        height: 3
      },
      {
        src: image70,
        width: 3,
        height: 4
      },
      {
        src: image71,
        width: 2,
        height: 3
      },
      {
        src: image72,
        width: 2,
        height: 3
      },
      {
        src: image73,
        width: 2,
        height: 3
      },
      {
        src: image74,
        width: 1,
        height: 1
      },
      {
        src: image75,
        width: 3,
        height: 3
      },
      {
        src: image76,
        width: 3,
        height: 3
      },
      {
        src: image77,
        width: 3,
        height: 3
      },
      {
        src: image78,
        width: 2,
        height: 3
      },
      {
        src: image79,
        width: 3,
        height: 4
      },
      {
        src: image80,
        width: 2,
        height: 3
      },
      {
        src: image81,
        width: 2,
        height: 3
      },
      {
        src: image82,
        width: 2,
        height: 3
      },
      {
        src: image83,
        width: 1,
        height: 1
      },
      {
        src: image84,
        width: 3,
        height: 3
      },
      {
        src: image85,
        width: 3,
        height: 3
      },
      {
        src: image86,
        width: 3,
        height: 3
      },
      {
        src: image87,
        width: 2,
        height: 3
      },
      {
        src: image88,
        width: 3,
        height: 4
      }
    ]
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default Moments
