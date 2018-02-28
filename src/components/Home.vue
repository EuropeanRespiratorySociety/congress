<template>

  <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
    <v-container grid-list-md style="margin-top: -145px;">
      <v-layout v-if="articles" row wrap>
      </v-layout>
    </v-container>

    <v-container grid-list-md>
      <v-layout v-if="articles" row wrap>
        <v-flex v-for="(post, index) in articles" xs12 sm12 :key="post.id">
          <v-card>
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{post.name}} - {{post.id}}</h3>
                <span><v-icon class="published">query_builder</v-icon>{{post.startTime}} - {{post.endTime}}</span>
                <span><v-icon class="published">query_builder</v-icon>{{post.startDateTime | moment}}</span>
              </div>
            </v-card-title>
            <v-card-text>
              
            <v-tabs icons-and-text centered >
              <v-tabs-slider color="blue"></v-tabs-slider>
              <v-tab href="#tab-1">
                Aims
                <v-icon>phone</v-icon>
              </v-tab>
              <v-tab href="#tab-2">
                Targets
                <v-icon>fa-bullseye</v-icon>
              </v-tab>
              <v-tab href="#tab-3" @click="getData(post.id)">
                Presentations
                <v-icon>fa-desktop</v-icon>
              </v-tab>
              <v-tab-item
                :key="1"
                :id="`tab-1`"
              >
                <v-card flat>
                  <v-card-text v-html="post.aims"></v-card-text>
                </v-card>
              </v-tab-item>


              <v-tab-item
                :key="2"
                :id="`tab-2`"
              >
                <v-card flat>
                  <v-card-text>

                    <v-list two-line>
                      <template v-for="item in post.targets">
                        <v-list-tile :key="item.name" @click="">
                          <v-list-tile-content>
                            <v-list-tile-title v-html="item.name"></v-list-tile-title>
                            <v-list-tile-sub-title>
                              {{item.id}}
                            </v-list-tile-sub-title>
                          </v-list-tile-content>
                        </v-list-tile>
                      </template>
                    </v-list>
                  
                  </v-card-text>
                </v-card>
              </v-tab-item>

              <v-tab-item
                :key="3"
                :id="`tab-3`"
              >
                <v-card flat>
                  <v-card-text>
                    <v-list three-line>
                      <template v-for="item in presentations[`session-${post.id}`]">
                        <v-list-tile :key="item.id" @click="">
                          <v-list-tile-content>
                            <v-list-tile-title v-html="item.name"></v-list-tile-title>
                            <v-list-tile-sub-title>
                              <v-icon class="published">query_builder</v-icon>{{item.startTime}} - {{item.endTime}} <br>
                              {{item.speakerText}}
                            </v-list-tile-sub-title>
                          </v-list-tile-content>
                        </v-list-tile>
                      </template>
                    </v-list>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>

            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    </v-flex>
</template>

<script>
  import { mapActions } from 'vuex'
  import moment from 'moment'
  // import * as config from '../../config'

  export default {
    name: 'Home',
    data () {
      return {
        fixed: false
      }
    },

    created () {
      this.fetchData()
    },

    computed: {
      slug () {
        return this.$store.getters.slug
      },

      presentations () {
        return this.$store.state.presentations
      },

      path () {
        return this.$store.state.route.path
      },

      articles () {
        return this.$store.state.pages[this.path].items
      },

      category () {
        return this.$store.state.pages[this.path].category
      },

      categoryContent () {
        return this.category.body + `<img 
            alt="Sleep and Breathing Sponsors" 
            src="../../static/img/sleep-and-breathing-sponsors.png"
            class="sponsors"
          >`
      }

    },

    filters: {
      moment: (date) => moment(date).format('MMMM Do YYYY, h:mm:ss a')
    },

    methods: {
      ...mapActions([
        'getCategory',
        'getPresentations',
        'pageNumber'
      ]),
      fetchData () {
        const payload = {
          pageNumber: parseInt(this.$route.params.id) || this.page,
          request: this.slug,
          skip: this.$store.state.skip
        }
        this.getCategory(payload)
      },

      getData (id) {
        this.getPresentations(id)
      }
    }

  }
</script>

<style lang="stylus">
  @import '../stylus/main'
  .published {
    font-size:18px!important;
    padding-right:5px;
  }

  .card__text {
    min-height: 140px;
  }

  .sponsors {
    height: 75px;
  }

</style>
