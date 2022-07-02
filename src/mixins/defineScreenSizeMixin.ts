import { mapActions } from 'vuex';

export default {
  created() {
    window.addEventListener('resize', this.defineScreenSize);
  },

  destroyed() {
    window.removeEventListener('resize', this.defineScreenSize);
  },

  mounted() {
    this.defineScreenSize();
  },

  methods: {
    ...mapActions([
      'appSetScreenSize',
    ]),

    defineScreenSize() {
      this.appSetScreenSize(window.innerWidth);
    },
  },
};
