import { expect, browser, $ } from '@wdio/globals'

describe('Test', () => {
    it('Single class', async () => {
        await browser.url("C:\\work\\wdio\\test.html");
        const div = await $('//div[@id="d1"]');
        await expect(div).toHaveElementClass('clickable');
        await expect(div).toHaveElementClass('step');
        await expect(div).toHaveElementClass(expect.stringContaining('clickable'));
        await expect(div).toHaveElementClass(expect.stringContaining('step'));
    });

    it('Multiplice classes 1', async () => {
        const div = await $('//div[@id="d1"]');
        await expect(div).toHaveElementClass('clickable step');
    });

    it('Multiplice classes 2', async () => {
        const div = await $('//div[@id="d1"]');
        await expect(div).toHaveElementClass(expect.stringContaining('clickable step'));
    });

    it('Multiplice classes 3', async () => {
        const div = await $('//div[@id="d1"]');
        await expect(div).toHaveElementClassContaining('clickable step');
    });
})
