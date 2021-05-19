import { firebaseDb } from '@lib';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const ref = firebaseDb.ref('views').child(req.query.slug as string);
    const { snapshot } = await ref.transaction((currentViews) => {
      if (currentViews === null) {
        return 1;
      }

      return currentViews + 1;
    });

    return res.status(200).json({
      total: snapshot.val(),
    });
  }

  if (req.method === 'GET') {
    const snapshot = await firebaseDb
      .ref('views')
      .child(req.query.slug as string)
      .once('value');
    const views = snapshot.val();

    return res.status(200).json({ total: views });
  }
}
