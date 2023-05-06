import { Hero } from '../components/blocks/hero';

export default function PressGenerating() {
  return (
    <Hero
      data={{
        color: 'default',
        headline: 'Press Page is Generating...',
        text: 'Press page is generating, Please refresh page in few minutes once it getting done.',
        actions: [
          {
            label: 'Refresh Page Now',
            type: 'button',
            icon: true,
            onClick() {
              window?.location?.reload();
            }
          }
        ]
      }}
    />
  );
}
