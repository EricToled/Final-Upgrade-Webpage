#!/usr/bin/env python3
"""Merge raw sections + per-batch translations into content.json (bilingual)."""
import json, glob, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
raw = json.load(open(os.path.join(HERE, '_sections_raw.json'), encoding='utf-8'))

trans = {}
# merge order: _trans_* first, then _ptrans_* (incremental patches); later files win
files = sorted(glob.glob(os.path.join(HERE, '_trans_*.json'))) + \
        sorted(glob.glob(os.path.join(HERE, '_ptrans_*.json')))
for f in files:
    for o in json.load(open(f, encoding='utf-8')):
        trans[o['id']] = o

missing = [s['id'] for s in raw if s['id'] not in trans]

# EN-side patches for sections whose ORIGINAL language is English (annotation
# notes translated for the English edition in resultados/en/)
enpatch_path = os.path.join(HERE, '_enpatch.json')
enpatch = json.load(open(enpatch_path, encoding='utf-8')) if os.path.exists(enpatch_path) else {}

sections = []
for s in raw:
    src = s['lang']                      # original language of this section
    tgt = 'en' if src == 'es' else 'es'  # translated language
    tr = trans.get(s['id'], {})
    title = {src: s['title'], tgt: tr.get('title', '')}
    body  = {src: s['body'],  tgt: tr.get('body', '')}
    if src == 'en' and s['id'] in enpatch:
        title['en'] = enpatch[s['id']].get('title', title['en'])
        body['en']  = enpatch[s['id']].get('body',  body['en'])
    sections.append({
        'id': s['id'], 'doc': s['doc'], 'level': s['level'],
        'title': title, 'body': body,
    })

out = {'generated': '2026-06-10', 'count': len(sections), 'sections': sections}
json.dump(out, open(os.path.join(HERE, 'content.json'), 'w', encoding='utf-8'),
          ensure_ascii=False, separators=(',', ':'))

print(f"sections: {len(sections)}  translated ids: {len(trans)}  missing translations: {len(missing)}")
if missing:
    print("MISSING:", missing[:20])
    sys.exit(1)
