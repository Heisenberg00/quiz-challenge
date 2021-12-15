import '@testing-library/jest-dom/extend-expect'
import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import React from "react"
React.useLayoutEffect = React.useEffect

Enzyme.configure({ adapter: new EnzymeAdapter() })
