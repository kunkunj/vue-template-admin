<template>
	<div class="login overflow-hidden flex items-center">
		<p id="wrap"></p>
		<div class="login-box">
			<div class="title">{{t('login.name')}}</div>
			<el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" status-icon>
				<el-form-item prop="username" :rules="{ required: true, message: t('login.rule_username'), trigger: 'blur' }">
					<el-input size="large" :placeholder="t('login.username')" v-model="ruleForm.username" />
				</el-form-item>
				<el-form-item prop="password" :rules="{ required: true, message: t('login.rule_password'), trigger: 'blur' }">
					<el-input
						size="large"
						type="password"
						:placeholder="t('login.password')"
						v-model="ruleForm.password"
					/>
				</el-form-item>
			</el-form>
			<el-button
				type="primary"
				class="btn"
				:loading="loading"
				@click="login"
			>
				{{ loading ? t('login.btn1') : t('login.btn') }}
			</el-button>
		</div>
	</div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useAuth } from '@store/auth'
import { usePermise } from '@store/permise'
import { useRouter } from 'vue-router'
const { t } = useI18n()
const router = useRouter()
const rules = ref({
	username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
	password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})
const ruleFormRef = ref(null)
const loading = ref(false)
const { login: Login } = useAuth()
const { addRouter } = usePermise()
const ruleForm = reactive({
	username: 'admin',
	password: '123456'
})
onMounted(() => {
	const p = document.getElementById('wrap')
	p.innerText = Array(200)
		.fill(Math.random() * 1234567890 + 1000000000)
		.reduce((str, item) => str + parseInt(item).toString(2), '')
})
const login = () => {
	ruleFormRef.value.validate(async (valid) => {
		if (valid) {
			loading.value = true
			await Login(ruleForm)
			addRouter()
			// removeToken()
			setTimeout(() => {
				loading.value = false
				router.push('/')
			}, 1000)
		} else {
			console.log('参数验证不合法！')
			return false
		}
	})
}
</script>
<style scoped lang="less">
.login {
	background-color: #000;
	width: 100vw;
	height: 100vh;
}
#wrap {
	height: 100%;
	width: 50%;
	color: transparent;
	background-clip: text;
	-webkit-background-clip: text;
	background-image: url(../../assets/1.gif);
	background-position: center;
	background-size: cover;
	mix-blend-mode: hard-light;
	filter: grayscale(1) invert(1);
	word-break: break-all;
}
.login-box {
	border: 1px solid #ededed;
	height: 280px;
	width: 320px;
	box-shadow: 0 0 5px 2px #ededed inset;
	border-radius: 10px;
	padding: 0 20px;
}
.title {
	font-size: 20px;
	color: #fff;
	text-align: center;
	margin: 30px 0 20px;
	letter-spacing: 2px;
}
.btn{
	width: 100%;
	margin-top: 20px;
}
::v-deep(.el-form-item.is-error .el-input__wrapper) {
	box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color)) inset;
}
::v-deep(.el-input__wrapper) {
	background-color: rgba(0, 0, 0, 0.5);
}
::v-deep(.el-input__inner) {
	color: var(--el-border-color);
}
</style>
