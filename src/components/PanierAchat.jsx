// import { useReducer } from 'react';

// // Produits disponibles (données statiques)
// const produits = [
//   { id: 1, nom: 'Casque audio', prix: 49.99 },
//   { id: 2, nom: 'Clavier mécanique', prix: 89.99 },
//   { id: 3, nom: 'Souris ergonomique', prix: 34.99 },
//   { id: 4, nom: 'Tapis de souris XL', prix: 19.99 },
// ];

// // État initial du panier
// const initialState = { articles: [] };

// // Reducer du panier
// function panierReducer(state, action) {
//   switch (action.type) {
//     case 'AJOUTER_ARTICLE': {
//       // Vérifier si l'article est déjà dans le panier
//       const existant = state.articles.find((a) => a.id === action.payload.id);
//       if (existant) {
//         // Augmenter la quantité
//         return {
//           ...state,
//           articles: state.articles.map((a) =>
//             a.id === action.payload.id
//               ? { ...a, quantite: a.quantite + 1 }
//               : a
//           ),
//         };
//       }
//       // Ajouter un nouvel article avec quantité 1
//       return {
//         ...state,
//         articles: [...state.articles, { ...action.payload, quantite: 1 }],
//       };
//     }

//     case 'SUPPRIMER_ARTICLE':
//       return {
//         ...state,
//         articles: state.articles.filter((a) => a.id !== action.payload),
//       };

//     case 'MODIFIER_QUANTITE': {
//       if (action.payload.quantite < 1) return state;
//       return {
//         ...state,
//         articles: state.articles.map((a) =>
//           a.id === action.payload.id
//             ? { ...a, quantite: action.payload.quantite }
//             : a
//         ),
//       };
//     }

//     case 'VIDER_PANIER':
//       return { ...state, articles: [] };

//     default:
//       return state;
//   }
// }

// function PanierAchat() {
//   const [state, dispatch] = useReducer(panierReducer, initialState);

//   // Calculer le total
//   const total = state.articles.reduce(
//     (acc, a) => acc + a.prix * a.quantite,
//     0
//   );

//   return (
//     <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
//       <h2>Boutique</h2>

//       {/* Produits disponibles */}
//       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
//         {produits.map((produit) => (
//           <div
//             key={produit.id}
//             style={{ padding: '12px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}
//           >
//             <strong>{produit.nom}</strong>
//             <p style={{ color: '#3b82f6', fontWeight: 'bold' }}>{produit.prix.toFixed(2)} €</p>
//             <button
//               onClick={() =>
//                 dispatch({ type: 'AJOUTER_ARTICLE', payload: produit })
//               }
//             >
//               Ajouter au panier
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Panier */}
//       <h2>Panier ({state.articles.length} article{state.articles.length > 1 ? 's' : ''})</h2>

//       {state.articles.length === 0 ? (
//         <p style={{ color: '#94a3b8' }}>Votre panier est vide.</p>
//       ) : (
//         <>
//           <ul style={{ listStyle: 'none', padding: 0 }}>
//             {state.articles.map((article) => (
//               <li
//                 key={article.id}
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '12px',
//                   padding: '12px',
//                   marginBottom: '8px',
//                   background: '#f8fafc',
//                   borderRadius: '8px',
//                   border: '1px solid #e2e8f0',
//                 }}
//               >
//                 <span style={{ flex: 1 }}>
//                   <strong>{article.nom}</strong>
//                   <br />
//                   <span style={{ color: '#64748b', fontSize: '14px' }}>
//                     {article.prix.toFixed(2)} € × {article.quantite} ={' '}
//                     {(article.prix * article.quantite).toFixed(2)} €
//                   </span>
//                 </span>

//                 {/* Modifier la quantité */}
//                 <button
//                   onClick={() =>
//                     dispatch({
//                       type: 'MODIFIER_QUANTITE',
//                       payload: { id: article.id, quantite: article.quantite - 1 },
//                     })
//                   }
//                 >
//                   -
//                 </button>
//                 <span>{article.quantite}</span>
//                 <button
//                   onClick={() =>
//                     dispatch({
//                       type: 'MODIFIER_QUANTITE',
//                       payload: { id: article.id, quantite: article.quantite + 1 },
//                     })
//                   }
//                 >
//                   +
//                 </button>

//                 {/* Supprimer */}
//                 <button
//                   onClick={() =>
//                     dispatch({ type: 'SUPPRIMER_ARTICLE', payload: article.id })
//                   }
//                   style={{ color: '#ef4444' }}
//                 >
//                   Supprimer
//                 </button>
//               </li>
//             ))}
//           </ul>

//           {/* Total et bouton vider */}
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: '#f1f5f9', borderRadius: '8px', marginTop: '16px' }}>
//             <strong>Total : {total.toFixed(2)} €</strong>
//             <button
//               onClick={() => dispatch({ type: 'VIDER_PANIER' })}
//               style={{ color: '#ef4444' }}
//             >
//               Vider le panier
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default PanierAchat;