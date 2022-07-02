import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'appScreenSize',
    ]),
  },

  methods: {
    /**
     * Receive a string with screen size and return if that is true
     * @param {String} size based on css screen mixin
     */
    isScreen(size : string) {
      if (size === 'phone-only' && this.appScreenSize < 575) {
        return true;
      }

      if (size === 'phone-up' && this.appScreenSize >= 375) {
        return true;
      }

      if (size === 'phone-big-up' && this.appScreenSize >= 576) {
        return true;
      }

      if (size === 'tablet-down' && this.appScreenSize <= 767) {
        return true;
      }

      if (size === 'tablet-up' && this.appScreenSize >= 768) {
        return true;
      }

      if (size === 'tablet-big-up' && this.appScreenSize >= 1024) {
        return true;
      }

      if (size === 'desktop-up' && this.appScreenSize >= 1200) {
        return true;
      }

      if (size === 'desktop-big-up' && this.appScreenSize >= 1800) {
        return true;
      }

      return false;
    },
  },
};
