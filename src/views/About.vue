<template>
  <div class="about">
    <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="24" :md="16" :lg="12">
            <div class="card">
                <div class="illustrated"><i class="el-icon-news"></i></div>
                <h1>About this app</h1>
                <p>Numbers is a simple ticket generator for Mega Millions. Built with Vue, 
                 using the Element UI library.</p>
                <p>This webapp might or might not be updated, and I suggest you gamble wisely 
                    if you choose to use this app. Thank you for using <strong>Numbers</strong>!</p>
            </div>
            <h2>App Credits</h2>
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
                <dt>3.0</dt>
                <dd>Converted app from jQuery/php to a Vue powered experience.</dd>
            </dl>
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
        margin: 1rem 0 1rem;
    }
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
