<template>
  <div class="about">
    <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="24" :md="16" :lg="12">
            <n-card
                icon="el-icon-news"
                isBlue>
                <template v-slot:header>
                    <h4>About</h4>
                    <h1>This Web App</h1>
                </template>
                <p>Numbers is a simple little random ticket generator for Mega Millions. I built it quickly with Vue, 
                 using the Element UI library, and it is currently hosted on Netlify.</p>
                <p>The real question is, &ldquo;is this entirely necessary?&rdquo; It is such a simple app and concept,
                 with very few real technical challenges, it just seemed like a good way to get started with Vue development.</p>
            </n-card>
            <h2>App Credits</h2>
            <dl>
                <dt>Initial Concept</dt>
                <dd>Mike Mattner &mdash; though I had initially hoped to use statistical analysis to generate numbers.</dd>
            </dl>
            <dl>
                <dt>Mediocre Design</dt>
                <dd>Mike Mattner &mdash; oh, look. Another brightly colored, light app.</dd>
            </dl>
            <dl>
                <dt>Hacked Together Development</dt>
                <dd>Mike Mattner &mdash; ¯\_(ツ)_/¯</dd>
            </dl>
             
            <h2>Version History</h2>
            <dl>
                <dt>3.0 &mdash; March 2019</dt>
                <dd>Converted app from jQuery/php to a Vue framework, further simplifying the build experience. Why? Because I wanted to keep learning Vue.</dd>
            </dl>
            <dl>
                <dt>2.0 &mdash; June 2012</dt>
                <dd>Converted to a jQuery powered single page app. It had animations!</dd>
            </dl>
            <dl>
                <dt>1.5 &mdash; January 2012</dt>
                <dd>Simplified interface and purpose. Removed number analysis. Why bother?</dd>
            </dl>
            <dl>
                <dt>1.0 &mdash; November 2011</dt>
                <dd>First release. PHP based to the core. Analyzed previous winning numbers to suss out a pattern. Found no pattern.</dd>
            </dl>
            
            <p>Thank you for using <strong>Numbers</strong>!</p>

            <p class="disclaimer">&copy; {{ year }} Mike Mattner. All rights reserved, but if you'd like to make a copy, let's talk!</p>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'About',
  computed: {
    year () {
      return new Date().getFullYear();
    }
  },
  beforeCreate() {
    window.scrollTo(0, 0);
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/utils/_variables.scss';

.about {
    padding-bottom: 6rem;
    text-align: left;
    
    h2 {
        margin-top: 2rem;
        margin-bottom: 1rem;
    }
    dl {
        margin: 0 0 1rem;
        
        dt {
            font-weight: bold; 
            color: $midGreen;
            padding: 0; 
            border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        dd {
            margin: 0; 
        }
    }
}
</style>
