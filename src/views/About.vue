<template>
  <div class="about">
    <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="24" :md="16" :lg="12" class="card">
          <h1>Credits</h1>
             <p>This is a simple little ticket generator for Mega Millions. Enjoy it, but use it wisely.</p>
             <dl class="clearfix">
                <dt>Concept</dt>
                <dd>Mike Mattner</dd>
                <dt>Design</dt>
                <dd>Mike Mattner</dd>
                <dt>Development</dt>
                <dd>Mike Mattner</dd>
                <dt>Egotist</dt>
                <dd>Mike Mattner</dd>
             </dl>
             
             <h2>Version History</h2>
             <dl class="clearfix">
                <dt>2.0</dt>
                <dd>Web application city.</dd>
                <dt>1.5</dt>
                <dd>Simplified interface and purpose.</dd>
                <dt>1.0</dt>
                <dd>First release.</dd>
             </dl>
             
             <p class="thanks">Thanks for using <strong>Numbers</strong>!</p>
           </el-col>
         </el-row>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="scss">
@import '@/assets/scss/utils/_variables.scss';

.about {
    padding-bottom: 6rem;
    dl {
        dt {
            font-weight: bold; 
            color: $dark-blueGreen;
            padding: 1em 0 0 0; 
            border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        dd {
            padding: 0; 
            margin: 0; 
            margin-bottom: 1.5rem;
        }
    }
}
</style>
