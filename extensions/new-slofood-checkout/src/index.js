import {
  extend,
  Banner,
  Button,
  Image,
  BlockStack,
  InlineStack,
  Text,
  Pressable,
  InlineLayout,
  Icon,
  View,
  Style,
  Grid,
  Heading,
  GridItem,
  BlockLayout,
  BlockSpacer,
} from "@shopify/checkout-ui-extensions";


extend("Checkout::Dynamic::Render", (root, { extensionPoint, i18n, api }) => {
  const imageLogo = root.createComponent(Image, {
    source:
      'https://cdn.shopify.com/s/files/1/2465/9907/files/logo_green.png?110205',
    loading: "lazy",
    accessibilityDescription: "Slofood Logo",
    fit: 'contain',
    aspectRatio: '7'
  });

  const offerTime = root.createComponent(
    Grid,
    {
      columns: ['5%', '47%'],
      border: 'base',
      borderWidth: 'medium',
      padding: 'large100',
      blockAlignment: 'center',
      inlineAlignment: 'center',
    },
    [
      root.createComponent(Image, {
        source:
          'https://cdn.shopify.com/s/files/1/2465/9907/t/373/assets/hourglass_2x.png?v=164797454042227211571667318912',
        loading: "lazy",
        accessibilityDescription: "Green Hourglass",
        fit: 'cover',
      }),

      root.createComponent(Text, { appearance: "success" }, 'Hurry! Your order is reserved for 10:00'),
    ],
  );

  const storeStamps = root.createComponent(
    Grid,
    {
      columns: ['50%', '50%'],
      spacing: 'base',
    },
    [
      root.createComponent(Image, {
        source:
          'https://cdn.shopify.com/s/files/1/2465/9907/t/373/assets/guarentee_1.png?v=59029607544975130181667318878',
        loading: "lazy",
        accessibilityDescription: "100% Satisfaction Guaranteed",
        fit: 'cover',
        aspectRatio: 4.5,
        cornerRadius: 'base',
      }),
      root.createComponent(Image, {
        source:
          'https://cdn.shopify.com/s/files/1/2465/9907/t/373/assets/guarentee_2.png?v=166607668064848913071667318888',
        loading: "lazy",
        accessibilityDescription: "Accredited Business",
        fit: 'cover',
        aspectRatio: 4.5,
      }),
    ],
  );

  const whyBuyFromUs = root.createComponent(
    BlockLayout,
    {
      undefined
    },
    [
      root.createComponent(BlockSpacer, { spacing: 'large500' }),
      root.createComponent(Heading, { undefined }, 'Why buy from us?'),
      root.createComponent(Grid,
        {
          columns: ['6.5%', '70%'],
          blockAlignment: 'center',
          spacing: 'base',
          padding: ['none', 'none', 'large200', 'none'],
        },
        [
          root.createComponent(Image, {
            source:
              'https://cdn.shopify.com/s/files/1/2465/9907/files/Frame.png?v=1654875617',
            loading: "lazy",
            accessibilityDescription: "Accredited Business",
            fit: 'contain',
            aspectRatio: 1,
          }),
          root.createComponent(BlockLayout, { undefined },
            [
              root.createComponent(Text, { undefined }, 'Free Shipping'),
              root.createComponent(Text, { undefined }, 'Free standard shipping within the US'),
            ])
        ]),

      root.createComponent(Grid,
        {
          columns: ['6.5%', 'fill'],
          rows: 50,
          blockAlignment: 'center',
          spacing: 'base',
          padding: ['none', 'none', 'large200', 'none'],
        },
        [
          root.createComponent(Image, {
            source:
              'https://cdn.shopify.com/s/files/1/2465/9907/files/Frame_30.png?v=1654875637',
            loading: "lazy",
            accessibilityDescription: "Accredited Business",
            fit: 'contain',
            aspectRatio: 1,
          }),
          root.createComponent(BlockLayout, { undefined },
            [
              root.createComponent(Text, { undefined }, 'Gourmet Ingredient Experts'),
              root.createComponent(Text, { undefined }, 'Have a question? Call us at +1 (888) 992-0141 or reach us via live chat'),
            ])
        ]),

      root.createComponent(Grid,
        {
          columns: ['6.5%', 'fill'],
          rows: 50,
          blockAlignment: 'center',
          spacing: 'base',
          padding: ['none', 'none', 'large200', 'none'],
        },
        [
          root.createComponent(Image, {
            source:
              'https://cdn.shopify.com/s/files/1/2465/9907/files/Group_16.png?v=1654875652',
            loading: "lazy",
            accessibilityDescription: "Accredited Business",
            fit: 'contain',
            aspectRatio: 1,
          }),
          root.createComponent(BlockLayout, { undefined },
            [
              root.createComponent(Text, { undefined }, '30 Return Promise'),
              root.createComponent(Text, { undefined }, 'Love it or your money back'),
            ])
        ])
    ],
  );



  root.appendChild(imageLogo);
  root.appendChild(offerTime);
  root.appendChild(storeStamps);
  root.appendChild(whyBuyFromUs);
  root.mount();
});