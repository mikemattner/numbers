<template>
  <div class="about">
    <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="24" :md="16" :lg="12">
            <h1>Credits</h1>
            <p>Numbers is a simple ticket generator for Mega Millions. Built with Vue, 
             using the Element UI library. Enjoy it, but use it wisely.</p>
            <dl>
                <dt>Concept</dt>
                <dd>Mike Mattner</dd>
            </dl>
            <dl>
                <dt>Design</dt>
                <dd>Mike Mattner</dd>
            </dl>
            <dl>
                <dt>Development</dt>
                <dd>Mike Mattner</dd>
            </dl>
             
            <h2>Version History</h2>
            <dl>
                <dt>2.0</dt>
                <dd>Web application city.</dd>
            </dl>
            <dl>
                <dt>1.5</dt>
                <dd>Simplified interface and purpose.</dd>
            </dl>
            <dl>
                <dt>1.0</dt>
                <dd>First release.</dd>
            </dl>
             
            <p class="thanks">Thank you for using <strong>Numbers</strong>! This webapp might or might 
            not be updated, and I suggest you gamble wisely.</p>
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
    h1{
        margin: 0 0 1rem;
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
