import { expect, browser, $ } from '@wdio/globals'

describe('Test', () => {
    it('toHaveText + expect.stringContaining', async () => {
        await browser.url("C:\\work\\wdio\\test.html")
        await expect($('//div[@name="a2"]')).toHaveText(expect.stringContaining("test"))
    })
    it('toHaveValue + expect.stringContaining', async () => {
        await expect($('//input[@name="a1"]')).toHaveValue(expect.stringContaining("test"))
    })
})
