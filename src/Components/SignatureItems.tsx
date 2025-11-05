import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { EffectFade, Navigation } from 'swiper/modules';

const signatureItems = [
  {
    title: 'Bruschetta Bar',
    description: 'Perfect at drinks receptions. Pair with our Pink Paloma Bar.',
    images: [
      'https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
  },
  {
    title: 'Crisp & Caviar',
    description: 'Late night indulgence, perfectly paired with Champagne.',
    images: [
      'https://images.pexels.com/photos/7937963/pexels-photo-7937963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7937964/pexels-photo-7937964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
  },
  {
    title: 'Yakitori Grill',
    description: 'Japanese street food skewers grilled over charcoal.',
    images: [
      'https://images.pexels.com/photos/620040/pexels-photo-620040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/13529753/pexels-photo-13529753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
  },
];

const SignatureItems: React.FC = () => {
  return (
    <section className="stations bg-[#2d2321] text-[#f0eae2] py-24 px-4 md:px-8">
      <Swiper
        modules={[EffectFade, Navigation]}
        effect="fade"
        speed={800}
        loop={true}
        navigation
        className="stations-swiper"
      >
        {signatureItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="station-card grid grid-cols-1 md:grid-cols-2 items-center gap-12">
              <div className="station-info">
                <h2 className="font-serif text-2xl text-[#c6b79c]">0{index + 1}</h2>
                <h3 className="font-serif text-5xl text-white my-4">{item.title}</h3>
                <p className="font-serif text-xl italic">{item.description}</p>
              </div>
              <div className="station-img grid grid-cols-2 gap-4">
                <img src={item.images[0]} alt={item.title} className="w-full rounded-lg" />
                <img src={item.images[1]} alt={item.title} className="w-full rounded-lg mt-8" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SignatureItems;