<!-- 

<template>
  <svg
    v-if="iconElement"
    xmlns="http://www.w3.org/2000/svg"
    :width="iconData.width"
    :height="iconData.height"
    :viewBox="iconData.viewBox"
    :aria-labelledby="`${iconData.title.replace(' ', '-')}-element`"
    role="presentation"
  >

    <title :id="`${iconData.title.replace(' ', '-')}-element`">{{ iconData.title }}</title>

    <g :fill="color">
      <component :is="iconElement" />
    </g>
  </svg>
</template>

<script lang="ts">
  import SvgInterface, { SvgInitialValue } from '../../../types/SvgElement';
  import { defineComponent } from 'vue'

   export default defineComponent({
    name: 'SvgBase',

    iconElement: Object,

    icondata:  {
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      title: '',
      color: '#000',
    },

    iconData: SvgInitialValue,

    props: {
      type: {
        type: String,
        default: 'icon',
        validator: (value: string) => [
          'icon',
          'other',
          'logo',
          'social',
          'cardFlag',
        ].indexOf(value) !== -1,
      },
      name: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        default: null,
      },
      color: {
        type: String,
        default: 'currentColor',
      },
      width: {
        type: [Number, String],
        default: null,
      },
      height: {
        type: [Number, String],
        default: null,
      },
      viewBox: {
        type: String,
        default: null,
      },
    },

    data() {
      return {
        iconElement: {},
      };
    },

    computed: {
      iconData(): SvgInterface {
        const name = `${this.type}-${this.name}`;

        switch (name) {
        case 'icon-PasswordShow':
          return this.defaultData('21', '16', '0 0 21 16');
        case 'icon-PasswordHidden':
          return this.defaultData('21', '21', '0 0 21 21');
        default:
          return this.defaultData('20', '20', '0 0 20 20');
        }
      },
    },

    watch: {
      name() {
        this.loadIcon();
      },
    },

    mounted() {
      this.loadIcon();
    },

    methods: {
      defaultData(width: string | number , height: string | number , viewBox: string): SvgInterface {
        return {
          title: this.title ? this.title : this.name,
          width: this.width ? this.width : width,
          height: this.height ? this.height : (height || width),
          viewBox: this.viewBox ? this.viewBox : (viewBox || `0 0 ${width} ${(height || width)}`),
        };
      },

      loadIcon():void {
        // eslint-disable-next-line prefer-template

        this.iconElement = () => import(`../${this.type}/${this.name}.vue`);
      },
    },
  });
</script>
-->
