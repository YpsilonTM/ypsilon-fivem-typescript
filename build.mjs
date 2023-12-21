import * as esbuild from 'esbuild'
import * as path from 'node:path'

const BASE_PATH = path.resolve(process.cwd())

const integrationPath = path.resolve(BASE_PATH, 'src')
const serverEntry = path.resolve(integrationPath, 'server', 'server.ts')
const clientEntry = path.resolve(integrationPath, 'client', 'client.ts')
const distDir = 'build'

const watch = process.argv.includes('--watch')

const result = await esbuild.build({
	bundle: true,
	logLevel: 'info',
	entryPoints: [serverEntry, clientEntry],
	format: 'cjs',
	outdir: distDir,
	platform: 'node',
	target: 'node16',
	watch,
})

console.log(result)
